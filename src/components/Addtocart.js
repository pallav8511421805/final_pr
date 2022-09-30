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
  console.log(CartData);
  return (
    <>
      <section className="product_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <div className="row justify-context-between">
                  <div className="col-4">
                    <div className="add_to_data">Product</div>
                  </div>
                  <div className="col-4">
                    <div className="add_to_data">Quantity</div>
                  </div>
                  <div className="col-4">
                    <div className="add_to_data">Total</div>
                  </div>
                </div>
              </div>
            </div>
            {CartData.map((d, i) => {
              return (
                <div className="col-12">
                  <div className="box text-center">
                    <div className="row justify-context-between">
                      <div className="col-4">
                        <img src={d.pname} width="50px" />
                      </div>
                      <div className="col-4">
                        <div>{d.qty}</div>
                      </div>
                      <div className="col-4">
                        <div>${d.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Addtocart;
