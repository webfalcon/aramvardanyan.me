import React, { Component } from "react";
import Thumb from "./Thumb";
import "./App.css";
import { Link, NavLink } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuopen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  componentWillMount() {
    console.log(this.props);
  }
  toggleMenu() {
    this.setState({
      menuopen: !this.state.menuopen
    });
  }

  render() {
    return (
      <div className="main">
        <Thumb menu={this.state.menuopen} img={this.props.thumb} />
        <div className="content">
          <div className={this.state.menuopen ? "menu active" : "menu"}>
            <div className="menu-content">
              <ul>
                <li>
                  <NavLink className="home" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">About me</NavLink>
                </li>
                <li>
                  <NavLink to="/skills">My Skills</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Hire me</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <a
              onClick={this.toggleMenu}
              className={this.state.menuopen ? "hamburger active" : "hamburger"}
            >
              <div className="hamburger__icon" />
            </a>
            <div className={this.state.menuopen ? "blurContent" : ""}>
              {this.props.page !== "home" && (
                <Link className="backLink" to="/">
                  <i className="fa fa-angle-left" /> Back
                </Link>
              )}
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
