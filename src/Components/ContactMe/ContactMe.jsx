import React, { useState } from 'react';
import './ContactMe.scss';

const ContactMe = () => {
  const [state, setState] = useState({
    rnName: '',
    rnEmail: '',
    rnSubject: '',
    rnMessage: '',
  });

  return (
    <div id="contact" className="contact-form-styles bg_color--5">
      <div className="container">
        <div className="row row--35 align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="section-title text-left mb--50">
              <h2 className="title">Contact Me</h2>
              {/* <p className="description">
                Lorem ipsum dolor
              </p> */}
            </div>
            <div className="form-wrapper">
              <form>
                <label htmlFor="item01">
                  <input
                    type="text"
                    name="name"
                    id="item01"
                    value={state.rnName}
                    onChange={(e) => {
                      setState({ rnName: e.target.value });
                    }}
                    placeholder="Your Name *"
                  />
                </label>

                <label htmlFor="item02">
                  <input
                    type="text"
                    name="email"
                    id="item02"
                    value={state.rnEmail}
                    onChange={(e) => {
                      setState({ rnEmail: e.target.value });
                    }}
                    placeholder="Your email *"
                  />
                </label>

                <label htmlFor="item03">
                  <input
                    type="text"
                    name="subject"
                    id="item03"
                    value={state.rnSubject}
                    onChange={(e) => {
                      setState({ rnSubject: e.target.value });
                    }}
                    placeholder="Write a Subject"
                  />
                </label>
                <label htmlFor="item04">
                  <textarea
                    type="text"
                    id="item04"
                    name="message"
                    value={state.rnMessage}
                    onChange={(e) => {
                      setState({ rnMessage: e.target.value });
                    }}
                    placeholder="Your Message"
                  />
                </label>
                <button
                  className="rn-button-style--2 btn-solid"
                  type="submit"
                  value="submit"
                  name="submit"
                  id="mc-embedded-subscribe"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="thumbnail mb_md--30 mb_sm--30">
              <img src="/assets/images/letsContact.png" alt="illustration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
