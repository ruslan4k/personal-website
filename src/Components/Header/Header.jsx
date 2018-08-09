import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  state = { isHeaderTransparent: true };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let isTransparent = this.state.isHeaderTransparent;
    if (window.pageYOffset > 100) {
      if (isTransparent) this.setState({ isHeaderTransparent: false });
    } else {
      if (!isTransparent) this.setState({ isHeaderTransparent: true });
    }
  };

  render() {
    return (
      <nav
        ref="navbar"
        className={
          this.state.isHeaderTransparent
            ? "navbar navbar-expand-lg  fixed-top transparent"
            : "navbar navbar-expand-lg  fixed-top"
        }
      >
        <div className="list-container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Skills <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
