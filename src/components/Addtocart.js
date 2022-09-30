import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproduct_data } from "../redux/actions/product.actions";

function Addtocart(props) {
  const cart = useSelector((state) => state.cartroot);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productroot);

  let CartData = [];
  product.productdata.map((p) => {
    cart.cartdata.map((c) => {
      if (p.id === c.id) {
        const q = {
          qty: c.qty,
        };
        const data = {
          ...p,
          ...q,
        };
        CartData.push(data);
      }
    });
  });
  useEffect(() => {
    dispatch(getproduct_data());
  }, []);
  return (
    <>
      <section className="product_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <div className="row justify-context-between">
                  <div className="col-3">
                    <div className="add_to_data">Product</div>
                  </div>
                  <div className="col-3">
                    <div className="add_to_data">Quantity</div>
                  </div>
                  <div className="col-3">
                    <div className="add_to_data">Total</div>
                  </div>
                  <div className="col-3">
                    <div className="add_to_data">Remove item</div>
                  </div>
                </div>
              </div>
            </div>
            {CartData.map((c) => {
              return (
                <div className="col-12">
                  <div className="box text-center">
                    <div className="row justify-context-between">
                      <div className="col-3 align-self-center">
                        <img src={c.pname} width="50px" />
                      </div>
                      <div className="col-3 align-self-center">
                        <div className="row justify-content-center">
                          <div className="addqty mx-1">+</div>
                          <div className="mx-3">{c.qty}</div>
                          <div className="addqty mx-1">-</div>
                        </div>
                      </div>
                      <div className="col-3 align-self-center">
                        <div>${c.price}</div>
                      </div>
                      <div className="col-3 align-self-center">
                        <div className="row justify-content-center">
                          <div className="deleteqty">
                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                          </div>
                        </div>
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
