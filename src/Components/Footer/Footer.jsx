import React from "react";
import LinkedInIcon from "mdi-react/LinkedinBoxIcon";
import Github from "mdi-react/GithubCircleIcon";
import GmailIcon from "mdi-react/GmailIcon";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container pt-3">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 offset-sm-2 col-sm-5 mb-2">
            <div className="row justify-content-center">
              <div className="col-3 col-sm-12 row justify-content-center justify-content-sm-start">
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/ruslan-khametov/"
                >
                  <GmailIcon size={36} className="social-icon gmail" />
                </a>
                <p className="d-none d-sm-block text-self-centered">
                  Contact me via email
                </p>
              </div>

              <div className="col-3 col-sm-12 row justify-content-center justify-content-sm-start">
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/ruslan-khametov/"
                >
                  <LinkedInIcon size={36} className="social-icon linkedIn" />
                </a>
                <p className="d-none d-sm-block text-self-centered">
                  View my LinkedIn profile
                </p>
              </div>
              <div className="col-3 col-sm-12 row justify-content-center justify-content-sm-start">
                <a target="blank" href="https://github.com/ruslan4k/">
                  <Github size={36} className="social-icon github" />
                </a>
                <p className="d-none d-sm-block text-self-centered">
                  View my GitHub profile
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-5 text-sm-left text-center">
            <a href="#" className="text-white">
              <h4>Hire me</h4>{" "}
            </a>
            <p className="d-none d-sm-block">Enquire about hiring me</p>

            <a href="#" className="text-white">
              <h4>Contact me</h4>{" "}
            </a>
            <p className="d-none d-sm-block mb-0">Send a general message</p>
          </div>
        </div>

        <div className="text-center mt-3">
          <h6>Copyright © 2018 Ruslan Khametov.</h6>
        </div>
      </div>
    </div>
  );
}
