import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <>
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <img width={250} src="images/logo.png" alt="#" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className> </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/" exact>
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    {" "}
                    <span className="nav-label">
                      Pages <span className="caret" />
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/about" exact>
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/terminal" exact>
                        Testimonial
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/product">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/blog">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/addto">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </NavLink>
                </li>
                <form className="form-inline">
                  <button
                    className="btn  my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  >
                    <i className="fa fa-search" aria-hidden="true" />
                  </button>
                </form>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
