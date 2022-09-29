import React from "react";
import { useSelector } from "react-redux";

function Addtocart(props) {
  const cart = useSelector((state) => state.cartroot);
  const data = cart.cartdata;
  {
    data.map((d) => {
      return (
        <div>
          <div>{d.id}</div>
          <div>{d.qty}</div>
        </div>
      );
    });
  }
}

export default Addtocart;
