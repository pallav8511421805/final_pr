import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproduct_data } from "../redux/actions/product.actions";

function Addtocart(props) {
  const cart = useSelector((state) => state.cartroot);
  const cartdata = cart.cartdata;
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productroot);
  const data = product.productdata;
  useEffect(() => {
    dispatch(getproduct_data());
  }, []);
  let CartData = [];
  data.map((p) => {
    cartdata.map((c) => {
      if (p.id === c.id) {
        CartData.push(p);
      }
    });
  });
  return <div></div>;
}

export default Addtocart;
