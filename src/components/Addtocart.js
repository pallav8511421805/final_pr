import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Deletecartaction } from "../redux/actions/cart.action";
import { decrementqty, incrementqty } from "../redux/actions/cart.action";
import { getproduct_data } from "../redux/actions/product.actions";

function Addtocart(props) {
  const cart = useSelector((state) => state.cartroot);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productroot);

  let CartData = [];
  product.productdata.map((p) => {
    cart.cartdata.map((c) => {
      if (p.id === c.id) {
        const data = {
          ...p,
          qty: c.qty,
        };
        CartData.push(data);
      }
    });
  });

  const Deletecart = (id) => {
    dispatch(Deletecartaction(id));
  };

  const qtypluscart = (id) => {
    dispatch(incrementqty(id));
  };

  const qtyminuscart = (id) => {
    dispatch(decrementqty(id));
  };

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
                          <div
                            className="addqty mx-1"
                            onClick={() => qtypluscart(c.id)}
                          >
                            +
                          </div>
                          <div className="mx-3">{c.qty}</div>
                          <div
                            className="addqty mx-1"
                            onClick={() => qtyminuscart(c.id)}
                            disabled={c.qty === 1 && true}
                          >
                            -
                          </div>
                        </div>
                      </div>
                      <div className="col-3 align-self-center">
                        <div>${c.price}</div>
                      </div>
                      <div className="col-3 align-self-center">
                        <div className="row justify-content-center">
                          <div
                            className="deleteqty"
                            onClick={() => Deletecart(c.id)}
                          >
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
