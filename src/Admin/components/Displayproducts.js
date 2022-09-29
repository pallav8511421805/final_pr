import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addcartaction, getcartaction } from "../../redux/actions/cart.action";
import { getproduct_data } from "../../redux/actions/product.actions";

function Displayproducts(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productroot);
  const cartdata = useSelector((state) => state.cartroot);
  const data = product.productdata;
  const cart_data = cartdata.cartdata;
  useEffect(() => {
    dispatch(getcartaction());
    dispatch(getproduct_data());
  }, []);

  const handleadd = (id) => {
    console.log(id);
    const values = {
      id: id,
      qty: 1,
    };
    dispatch(addcartaction(values));
  };

  const handleview = (id) => {
    history.push("/productdetail", { id: id });
  };

  return (
    <>
      <div className="row">
        {data.map((d, i) => {
          return (
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="box">
                <div className="option_container"></div>
                <div className="img-box">
                  <img src={d.pname} alt />
                </div>
                <div className="detail-box">
                  <h5>{d.name}</h5>
                  <h6>${d.price}</h6>
                </div>
              </div>
              <div className="options">
                <div className="row justify-content-between py-2">
                  <a className="option1" onClick={() => handleview(d.id)}>
                    View
                  </a>
                  <a
                    className="add_to_cart"
                    onClick={() => {
                      handleadd(d.id);
                    }}
                  >
                    + Add to cart
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Displayproducts;
