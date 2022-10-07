import React from "react";
import { NavLink } from "react-router-dom";
import Alert from "../alert/Alert";
import { useDispatch, useSelector } from "react-redux";
import { Logoutaction } from "../redux/actions/auth.action";

function Header(props) {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const cartdata = useSelector((state) => state.cartroot);
  const cart = cartdata.cartdata;

  const carticon = [];
  cart.map((d) => {
    carticon.push(d.qty);
  });
  let sum = 0;
  for (let i = 0; i < carticon.length; i++) {
    sum += carticon[i];
  }

  return (
    <>
      <header className="header_section bg-header sticky z-index3">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <NavLink className="navbar-brand" exact to={"/"}>
              <h1 className="logodesign">
                F<span className="logodesign1">a</span>mms
              </h1>
            </NavLink>
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
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" exact>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/product" exact>
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about" exact>
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/terminal" exact>
                    Testimonial
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/blog" exact>
                    Blog
                  </NavLink>
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
                    <div className="qtydata1">
                      <i
                        className="fa fa-shopping-cart align-self-center m-1"
                        aria-hidden="true"
                      ></i>
                      <div className="qtydata align-self-center m-1">{sum}</div>
                    </div>
                  </NavLink>
                </li>
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
