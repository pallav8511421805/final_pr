import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcartaction } from "../redux/actions/cart.action";

function Addtocart(props) {
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.cartroot);
  const cart_data = cartdata.cartdata;
  console.log("cart_data", cart_data);
  useEffect(() => {
    dispatch(getcartaction());
  }, []);
  return (
    <div>
      <h1 style={{ margin: "100px 0", textAlign: "center" }}>Add to cart</h1>
    </div>
  );
}

export default Addtocart;
