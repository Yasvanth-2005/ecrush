import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import axios from "axios";

export default function Trainers() {
  const [content, setContent] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    const serverURL = `${process.env.REACT_APP_BACKEND_URL}/api/trivia`;
    axios
      .get(serverURL)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    if (Array.isArray(data) && data.length !== 0) {
      setContent(true);
    }
  }, [data]);
  return (
    <>
      <Header />

      <div className="head">
        <h2 className="head-title">Weekend Trivia</h2>
        <p className="pt-2">Test your knowledge.</p>
      </div>

      {content ? (
        <>
          <div className="click-here-to-attempt">
            <h1>
              <a href={data[0].link} target="_blank">
                Click Here
              </a>{" "}
              to attempt quiz
            </h1>
          </div>

          <SectionTitle title="Previous Week Winners" />
          <div className="container mb-4">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4 mt-3">
                <div
                  className=" d-flex justify-content-center align-items-center"
                  style={{
                    flexDirection: "column",
                    padding: "10px",
                    boxShadow:
                      "0 1px 0 0 rgb(139 141 157 / 5%), 0 5px 10px 0 rgb(65 71 108 / 15%",
                  }}
                >
                  <div
                    style={{
                      width: "150px",
                      height: "150px",
                      overflow: "hidden",
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      alt="winner1"
                      className="img-fluid"
                      src={`https://intranet.rguktn.ac.in/SMS/usrphotos/user/${data[0].winners.id1}.jpg`}
                    />
                  </div>
                  <h3 className="mt-2">{data[0].winners.name1}</h3>
                  <p>{data[0].winners.id1}</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mt-3">
                <div
                  className=" d-flex justify-content-center align-items-center"
                  style={{
                    flexDirection: "column",
                    padding: "10px",
                    boxShadow:
                      "0 1px 0 0 rgb(139 141 157 / 5%), 0 5px 10px 0 rgb(65 71 108 / 15%",
                  }}
                >
                  <div
                    style={{
                      width: "150px",
                      height: "150px",
                      overflow: "hidden",
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      alt="winner1"
                      className="img-fluid"
                      src={`https://intranet.rguktn.ac.in/SMS/usrphotos/user/${data[0].winners.id2}.jpg`}
                    />
                  </div>
                  <h3 className="mt-2">{data[0].winners.name2}</h3>
                  <p>{data[0].winners.id2}</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mt-3">
                <div
                  className=" d-flex justify-content-center align-items-center"
                  style={{
                    flexDirection: "column",
                    padding: "10px",
                    boxShadow:
                      "0 1px 0 0 rgb(139 141 157 / 5%), 0 5px 10px 0 rgb(65 71 108 / 15%",
                  }}
                >
                  <div
                    style={{
                      width: "150px",
                      height: "150px",
                      overflow: "hidden",
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      alt="winner1"
                      className="img-fluid"
                      src={`https://intranet.rguktn.ac.in/SMS/usrphotos/user/${data[0].winners.id3}.jpg`}
                    />
                  </div>
                  <h3 className="mt-2">{data[0].winners.name3}</h3>
                  <p>{data[0].winners.id3}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div
          className=" d-flex align-items-center justify-content-center"
          style={{ height: "300px" }}
        >
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
