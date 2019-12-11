import React from "react";
import { Link } from "react-router-dom";
import "./styles/Menu.css";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light menu">
      <div className="container">
        <Link to="/" className="navbar-brand" href="#">
          <h4>
            OB<span>J</span>
          </h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="material-icons">menu</i>
        </button>
        <div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav float-right">
              <li className="nav-item active">
                <Link className="nav-link" to="/home">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Wishes
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li> */}
            </ul>
            <ul className="navbar-nav">
              <li>
                <Link className="nav-link" to="/loign">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
