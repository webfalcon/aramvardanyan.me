import React, { Component } from "react";
import "./App.css";
import Main from "./Main";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Main thumb="./assets/thumb.jpg" page="home">
        <div className="centerContent">
          <div>
            <h1>Aram Vardanyan</h1>
            <h2>Full Stack Web Developer</h2>
            <Link to="/skills" className="btn btn-standard">
              MY SKILLS
            </Link>
            <div className="textContainer pt-110">
              <p className="text-right">
                Your customers don’t care about cleverness. They want clarity.
                I'll make you a website that gets your message across. I'll make
                it on time. I'll make it on budget, but you'll be the hero.
              </p>
            </div>
          </div>
        </div>

        <div className="homeFooter">
          <div className="row">
            <div className="col-5">
              <Link className="hireMe" to="/contact">
                HIRE ME
              </Link>
            </div>
            <div className="col-7">
              <ul className="socialIcons">
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://linkedin.com/in/aram-vardanyan-5b510b121/"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://facebook.com/varam97"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/web_Falcon/"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/webfalcon/aramvardanyan.me"
                  >
                    <i className="fa fa-github" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Main>
    );
  }
}

export default Home;
