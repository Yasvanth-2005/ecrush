import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import axios from "axios";

export default function Newspaper() {
  const [articles, setArticles] = useState([]);
  const [noArticles, setNoArticles] = useState(false);
  const [category, setCategory] = useState("");

  useEffect(() => {
    try {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/api/news/${category}`)
        .then((res) => {
          setArticles(res.data.articles);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, [category]);

  useEffect(() => {
    if (articles.length == 0) {
      setNoArticles(true);
    } else {
      setNoArticles(false);
    }
  }, [articles]);

  return (
    <>
      <Header />
      <section className="container" style={{ marginTop: "120px" }}>
        <SectionTitle title="News Articles" />
        <form className="mt-2 mb-5 mx-auto" style={{ width: "300px" }}>
          <h5 className="text-center mb-3">Select Category</h5>
          <div className="form-group">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-select"
            >
              <option value="">All</option>
              <option value="sports">Sports</option>
              <option value="entertainment">Entertainment</option>
              <option value="technology">Technology</option>
              <option value="business">Business</option>
              <option value="science">Science</option>
              <option value="health">Health</option>
            </select>
          </div>
        </form>
        <div className="row d-flex">
          {!noArticles ? (
            articles.map((article, index) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
                <div
                  className="card mb-4"
                  style={{ height: "100%", position: "relative" }}
                >
                  <div
                    className="card-header d-flex align-items-center justify-content-center"
                    style={{ height: "250px" }}
                  >
                    <img
                      alt={article.title}
                      src={article.urlToImage}
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description}</p>
                    <a
                      href={article.url}
                      className="btn btn-primary"
                      target="_blank"
                      style={{ position: "absolute", bottom: "10px" }}
                    >
                      View More &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "50vh" }}
            >
              <div className="spinner-border" role="status">
                <span className="sr-only"></span>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
