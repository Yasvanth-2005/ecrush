import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import axios from "axios";

export default function Newspaper() {
  const [articles, setArticles] = useState([]);
  const [noArticles, setNoArticles] = useState(false);

  useEffect(() => {
    try {
      axios.get(`https://ecrushbackend.onrender.com/api/news`).then((res) => {
        setArticles(res.data.articles);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    console.log(articles);
    if (articles.length == 0) {
      setNoArticles(true);
    } else {
      setNoArticles(false);
    }
    console.log(noArticles);
  }, [articles]);

  return (
    <>
      <Header />
      <section className="container" style={{ marginTop: "120px" }}>
        <SectionTitle title="News Articles" />
        <div className="row d-flex">
          {!noArticles ? (
            articles.map((article, index) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
                <div
                  className="card mb-4"
                  style={{ height: "100%", position: "relative" }}
                >
                  <div className="card-header">
                    <img
                      alt={article.title}
                      src={article.urlToImage}
                      className="img-fluid"
                      style={{ height: "200px" }}
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
              <h2 className="text-align">No Results Found</h2>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
