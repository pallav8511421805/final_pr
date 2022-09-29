import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcartaction } from "../redux/actions/cart.action";

function Addtocart(props) {
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.cartroot);
  const data = cartdata.cartdata;
  useEffect(() => {
    dispatch(getcartaction());
  }, []);
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
