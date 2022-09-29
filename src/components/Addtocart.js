import React from "react";
import { useSelector } from "react-redux";

function Addtocart(props) {
  const cartdata = useSelector((state) => state.cartroot);
  const data = cartdata.cartdata;
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
