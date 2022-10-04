import React from "react";
import { useSelector } from "react-redux";

function Placeorder(props) {
  const cartdata = useSelector((state) => state.cartdata);
  const cart = cartdata.cartdata;
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 ">
            <div className="w-100">
              <form></form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Placeorder;
