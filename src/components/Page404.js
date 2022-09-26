import React from "react";
import { NavLink } from "react-router-dom";

function Page404(props) {
  return (
    <section style={{ padding: "100px" }}>
      <div className="container">
        <div className="d-flex justify-content-center">
          <img src="images/page404.png" className="imgdata" />
        </div>
        <div className="d-flex justify-content-center my-3">
          <NavLink className="logoutbtn" to="/" exact>
            Go to home page
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Page404;
