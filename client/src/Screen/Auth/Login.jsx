import React, { useState } from "react";
import "./Style.css";
import { Link, useNavigate } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import responseFacebook, { componentClicked } from "./Facbook";
import { PORT, fbAppId } from "../../Config";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const formHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    axios
      .post(`${location.protocol}//${location.hostname}:${PORT}/auth`, form)
      .then((success) => {
        console.log(success);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="main">
      <div className="container ">
        <form onSubmit={submitHandler} className="box center">
          <img
            src={`${location.origin}/src/assets/img/instalogo.png`}
            alt="logo"
            style={{ marginBottom: "1em" }}
          />

          <FacebookLogin
            appId={fbAppId}
            autoLoad={false}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}
            cssClass="btn login"
          />
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
            <a href="#" className="input-overlap-link">
              Forgot?
            </a>
          </div>
          <button className="btn login">Log in</button>
        </form>
      </div>
      <div className="container ">
        <div className="box center">
          <h4 style={{ color: "rgb(123 116 116)" }}>
            Dont't have an account?
            <Link to="/SignUp" style={{ color: "green" }}>
              Sign up
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
