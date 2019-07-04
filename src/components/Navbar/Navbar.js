import React, { Component } from "react";
import './Navbar.css';
import logo from "../../images/logo.png";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="City Life" className="nav-logo" />
            </Link>
            <button type="button" className="nav-btn">
              <FiAlignJustify className="nav-icon" onClick={this.handleToggle} />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
