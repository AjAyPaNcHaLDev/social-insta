import React from "react";
import "./Style.css";

const Footer = (props) => {
  return (
    <div className={props.className == undefined ? "footer" : props.className}>
      <FooterLink />
      <p>© {new Date().getFullYear()} Ajay Developer</p>
    </div>
  );
};

const FooterLink = () => {
  return (
    <React.Fragment>
      <ul>
        <li>
          <a href="">ABOUT</a>
        </li>
        <li>
          <a href="">HELP</a>
        </li>
        <li>
          <a href="">PRESS</a>
        </li>
        <li>
          <a href="">API</a>
        </li>
        <li>
          <a href="">JOBS</a>
        </li>
        <li>
          <a href="">PRIVACY</a>
        </li>
        <li>
          <a href="">TEMS</a>
        </li>
        <li>
          <a href="">LOCATIONS</a>
        </li>
        <li>
          <a href="">TOP ACCOUNTS</a>
        </li>
        <li>
          <a href="">HASHTAGS</a>
        </li>
        <li>
          <a href="">LANGUAGE</a>
        </li>
      </ul>
    </React.Fragment>
  );
};

export { FooterLink };
export default Footer;
