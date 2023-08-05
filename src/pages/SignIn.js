import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const loginSuccess = (res) => {
    const guser = jwt_decode(res?.credential);
    if (guser?.hd === "rguktn.ac.in") {
      localStorage.setItem("user", JSON.stringify(guser));
      alert("Singed in Successfully");
      navigate("/");
    } else {
      alert("Only Rguktn mails are allowed");
    }
  };
  return (
    <>
      <Header />
      <div
        style={{ minHeight: "80vh", flexDirection: "column" }}
        className="d-flex justify-content-center align-items-center"
      >
        <h4 className="mb-3" align="center">
          SIgn in Here
        </h4>
        <GoogleLogin
          onSuccess={loginSuccess}
          onError={(err) => alert("Sign In Failed")}
        />
      </div>
      <Footer />
    </>
  );
}
