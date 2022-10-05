import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addcartaction } from "../../redux/actions/cart.action";
import { getproduct_data } from "../../redux/actions/product.actions";
import { setalertaction } from "../../redux/actions/alert.action";
function Displayproducts(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productroot);
  const data = product.productdata;
  useEffect(() => {
    dispatch(getproduct_data());
  }, []);

  const handleadd = (id) => {
    const values = {
      id: id,
      qty: 1,
    };
    dispatch(addcartaction(values));
    dispatch(
      setalertaction({ text: "Product in add to cart.", color: "info" })
    );
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
                <div class="option_container">
                  <div class="options">
                    <a onClick={() => handleview(d.id)} class="option1">
                      View
                    </a>
                    <a
                      onClick={() => {
                        handleadd(d.id);
                      }}
                      className="option2"
                    >
                      + Add to cart
                    </a>
                  </div>
                </div>
                <div className="img-box">
                  <img src={d.pname} alt />
                </div>
                <div className="detail-box">
                  <h5>{d.name}</h5>
                  <h6>${d.price}</h6>
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
