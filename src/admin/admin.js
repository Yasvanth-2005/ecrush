import { useState } from "react";
import FileBase from "react-file-base64";
import axios from "axios";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);
  const [post, setPost] = useState({
    title: "",
    img: "",
  });
  const [link, setLink] = useState("");
  const [winners, setWinners] = useState({
    name1: "",
    name2: "",
    name3: "",
    id1: "",
    id2: "",
    id3: "",
  });
  const adminPassword = "a-pass";
  const serverURL = "https://ecrushbackend.onrender.com/api/";

  const addPostFrom = (e) => {
    e.preventDefault();
    if (post.img === "") {
      alert("File FIeld is Required");
    }
    try {
      axios.post(`${serverURL}/posts`, post);
      setPost({ title: "", img: "" });
      alert("New Post Created");
    } catch (err) {
      console.log(err.message);
    }
  };

  const triviaFormSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post(`${serverURL}/trivia`, { link, winners });
      console.log({ link, winners });
      setLink("");
      setWinners({
        name1: "",
        name2: "",
        name3: "",
        id1: "",
        id2: "",
        id3: "",
      });
      alert("New Trivia Created");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {!admin ? (
        <form
          className="form mt-5"
          style={{
            width: "100%",
            maxWidth: "320px",
            padding: "20px 10px",
            margin: "auto",
            boxShadow:
              "0 1px 0 0 rgb(139 141 157 / 5%), 0 5px 10px 0 rgb(65 71 108 / 15%)",
          }}
          onSubmit={() => {
            if (password === adminPassword) {
              setAdmin((prev) => !prev);
            } else {
              alert("Wrong Password");
            }
          }}
        >
          <div className="form-group">
            <input
              type="password"
              placeholder="Enter Admin Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-sm btn-primary text-center w-100 mt-3">
            Submit
          </button>
        </form>
      ) : (
        <div className="container">
          <div class="row">
            <div class="col-12 col-lg-6">
              <div
                className="mb-3 w-100 d-flex justify-content-center"
                style={{ marginTop: "30px" }}
              >
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    if (
                      window.confirm(
                        "This will delete all posts. Are you sure you want to delete?"
                      )
                    ) {
                      try {
                        axios.delete(`${serverURL}/posts`);
                        alert("All posts are deleted successfully!");
                      } catch (err) {
                        console.log(err.message);
                      }
                    }
                  }}
                >
                  Delete Previous Daily Posts
                </button>
              </div>
              <form
                className="mt-5"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  height: "auto",
                  padding: "20px 10px",
                  margin: "3rem auto",
                  boxShadow:
                    "0 1px 0 0 rgb(139 141 157 / 5%), 0 5px 10px 0 rgb(65 71 108 / 15%)",
                }}
                onSubmit={addPostFrom}
              >
                <h5 className="text-center mb-3">Create New Daily Post</h5>
                <div className="form-group">
                  <label
                    className="form-label"
                    htmlFor="title"
                    style={{ fontSize: "20px" }}
                  >
                    Title
                  </label>
                  <input
                    className="form-control mb-3"
                    type="text"
                    id="title"
                    value={post.title}
                    onChange={(e) =>
                      setPost({ ...post, title: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label
                    className="form-label"
                    htmlFor="img"
                    style={{ fontSize: "20px" }}
                  >
                    Image
                  </label>
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setPost({ ...post, img: base64 })}
                    required
                  />
                </div>
                <button className="btn btn-sm btn-primary text-center w-100 mt-3">
                  Submit
                </button>
              </form>
            </div>
            <div class="col-12 col-lg-6">
              <div
                className="mb-3 w-100 d-flex justify-content-center"
                style={{ marginTop: "30px" }}
              >
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    if (
                      window.confirm(
                        "This will delete Previous Trivia.Are You Sure You Want to Delete This?"
                      )
                    ) {
                      try {
                        axios.delete(`${serverURL}/trivia`);
                        alert("Previous Trivia is deleted successfully!");
                      } catch (err) {
                        console.log(err.message);
                      }
                    }
                  }}
                >
                  Delete Previous Trivia
                </button>
              </div>
              <form
                className="mt-2"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  height: "auto",
                  padding: "20px 10px",
                  margin: "3rem auto",
                  boxShadow:
                    "0 1px 0 0 rgb(139 141 157 / 5%), 0 5px 10px 0 rgb(65 71 108 / 15%)",
                }}
                onSubmit={triviaFormSubmit}
              >
                <h5 className="text-center mb-3">Create New Trivia</h5>
                <div className="form-group">
                  <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Link of weekend trivia"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    required
                  />
                </div>
                <h6 style={{ textAlign: "left" }} className="mb-3">
                  Previous Winners
                </h6>
                <div className="form-group">
                  <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Winner 1"
                    value={winners.name1}
                    onChange={(e) =>
                      setWinners({ ...winners, name1: e.target.value })
                    }
                    required
                  />
                  <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Winner 1 Id Number"
                    value={winners.id1}
                    onChange={(e) =>
                      setWinners({ ...winners, id1: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Winner 2"
                    value={winners.name2}
                    onChange={(e) =>
                      setWinners({ ...winners, name2: e.target.value })
                    }
                    required
                  />
                  <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Winner 2 Id Number"
                    value={winners.id2}
                    onChange={(e) =>
                      setWinners({ ...winners, id2: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Winner 3"
                    value={winners.name3}
                    onChange={(e) =>
                      setWinners({ ...winners, name3: e.target.value })
                    }
                    required
                  />
                  <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Winner 3 Id Number"
                    value={winners.id3}
                    onChange={(e) =>
                      setWinners({ ...winners, id3: e.target.value })
                    }
                    required
                  />
                </div>
                <button type="submit" className="w-100 btn btn-sm btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
