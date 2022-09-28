import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getproduct_data } from "../../redux/actions/product.actions";

function Displayproducts(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productroot);
  const data = product.productdata;
  useEffect(() => {
    dispatch(getproduct_data());
  }, []);

  const handleview = (id) => {
    history.push("/productdetail", { id: id });
  };

  return (
    <>
      <div className="row">
        {data.map((d, i) => {
          if (i === 0) {
            return (
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="box">
                  <div className="option_container">
                    <div className="options">
                      <a className="option1" onClick={() => handleview(d.id)}>
                        View
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
                <div className="text-center my-2">
                  <a className="add_to_cart">
                    Add to cart{" "}
                    <i class="fa fa-cart-plus" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            );
          } else {
            return (
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="box">
                  <div className="option_container">
                    <div className="options"></div>
                  </div>
                  <div className="img-box">
                    <img src={d.pname} alt />
                  </div>
                  <div className="detail-box">
                    <h5>{d.name}</h5>
                    <h6>${d.price}</h6>
                  </div>
                </div>
                <div className="text-center my-2">
                  <a className="add_to_cart">
                    Add to cart{" "}
                    <i class="fa fa-cart-plus" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default Displayproducts;
