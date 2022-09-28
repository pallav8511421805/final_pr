import React from "react";
import { NavLink } from "react-router-dom";
import Alert from "../alert/Alert";
import { useDispatch, useSelector } from "react-redux";
import { Logoutaction } from "../redux/actions/auth.action";

function Header(props) {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <>
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand">
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
                    Home
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
                    <li>
                      <NavLink to="/blog" exact>
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/product" exact>
                        Products
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/check" exact>
                        Checkout page
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {auth.user === null ? (
                    <NavLink className="nav-link" to="/login">
                      Log in <i class="fa fa-lock" aria-hidden="true"></i>
                    </NavLink>
                  ) : (
                    <div
                      className="logoutbtn"
                      onClick={() => dispatch(Logoutaction())}
                    >
                      Log out{" "}
                      <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                    </div>
                  )}
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
          <Alert />
        </div>
      </header>
    </>
  );
}

export default Header;
