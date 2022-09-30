import React from "react";
import { useSelector } from "react-redux";

function Addtocart(props) {
  const cart = useSelector((state) => state.cartroot);
  const cartdata = cart.cartdata;
  console.log(cartdata);
  return (
    <div>
      <div>add to cart</div>
    </div>
  );
}

export default Addtocart;
