import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproduct_data } from "../../redux/actions/product.actions";

function Displayproducts(props) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productroot);
  const data = product.productdata;
  useEffect(() => {
    dispatch(getproduct_data());
  }, []);
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
                      <a href className="option1">
                        View
                      </a>
                      <a href className="option2">
                        Buy Now
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
                  <div className="my-1">
                    <h6 className="font-weight-bold">Description : </h6>
                    <div>{d.description}</div>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="box">
                  <div className="option_container">
                    <div className="options">
                      <a href className="option1">
                        Add To Cart
                      </a>
                      <a href className="option2">
                        Buy Now
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
                  <div className="my-1">
                    <h6 className="font-weight-bold">Description : </h6>
                    <div>{d.description}</div>
                  </div>
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
