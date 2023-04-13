import React, { useState, useEffect } from "react";
import Footer from "../../Component/Footer/Footer";
import { GetApp } from "../../Component/Footer/GetApp";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Style.css";
import FacebookLogin from "react-facebook-login";
import responseFacebook, { componentClicked } from "./Facbook";
import { PORT, fbAppId } from "../../Config";
const SignUp = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    contect: "",
    name: "",
  });
  const formHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    axios
      .post(
        `${location.protocol}//${location.hostname}:${PORT}/insert/user`,
        form
      )
      .then((success) => {
        console.log(success);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <div className="main">
        <div className="container">
          <form onSubmit={submitHandler} className="box center">
            <img
              src={`${location.origin}/src/assets/img/instalogo.png`}
              alt="logo"
              style={{ marginBottom: "1em" }}
            />
            <p
              style={{
                fontWeight: 18,
                color: "#8e8e8e",
                textAlign: "center",
                fontSize: 18,
              }}
            >
              Sign up to see photos and videos <br />
              from your friends.
            </p>
            <FacebookLogin
              appId={fbAppId}
              autoLoad={false}
              fields="name,email,picture"
              onClick={componentClicked}
              callback={responseFacebook}
              cssClass="btn login"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyItems: "center",
                alignItems: "center",
                gap: 10,
                color: "#8e8e8e",
                marginBottom: "1em",
              }}
            >
              <span className="hr-line" />
              <span>OR</span>
              <span className="hr-line" />
            </div>
            <div className="form-group">
              <label htmlFor="contect" hidden>
                Mobile Number or Email
              </label>
              <input
                type="text"
                name="contect"
                placeholder="Mobile Number or Email"
                id="contect"
                value={form.contect}
                onChange={(e) => {
                  formHandler(e);
                }}
                required={true}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name" hidden>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                id="name"
                value={form.name}
                onChange={(e) => {
                  formHandler(e);
                }}
                required={true}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username" hidden>
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                id="username"
                value={form.username}
                onChange={(e) => {
                  formHandler(e);
                }}
                required={true}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" hidden>
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                value={form.password}
                onChange={(e) => {
                  formHandler(e);
                }}
                required={true}
                className="form-control"
              />
            </div>
            <button onClick={() => {}} className="btn login">
              Sign up
            </button>

            <p
              style={{
                fontWeight: 18,
                color: "#8e8e8e",
                textAlign: "center",
                fontSize: 18,
              }}
            >
              By signing up, you agree to our Terms
              <br /> <b>Data Policy </b>and
              <b> Cookies Policy</b>.
            </p>
          </form>
        </div>
        <div className="container ">
          <div className="box center">
            <h4 style={{ color: "rgb(123 116 116)" }}>
              have an account?
              <Link to="/LogIn" style={{ color: "green", marginLeft: ".4em" }}>
                Login in
              </Link>
            </h4>
          </div>
        </div>

        <GetApp />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default SignUp;
