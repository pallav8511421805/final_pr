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

  let totel = 0;
  let totelamount = 0;

  CartData.map((d) => {
    totel = d.qty * parseInt(d.price);
    totelamount = totelamount + totel;
  });

  const discount = Math.round(totelamount * 0.1);
  const finelprice = totelamount - discount;

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
      <section>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <div className="w-100">
                <table className="addtotable">
                  <tr className="row justify-content-between trcolor">
                    <th>Products</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove item</th>
                  </tr>
                  <tbody>
                    {CartData.map((d) => {
                      return (
                        <tr className="row justify-content-between trcolor1">
                          <td className="align-self-center">
                            <img src={d.pname} width="25px" />
                          </td>
                          <td className="align-self-center">
                            {" "}
                            <div className="row justify-content-center">
                              <button
                                className="addqty mx-1"
                                onClick={() => qtypluscart(d.id)}
                              >
                                +
                              </button>
                              <div className="mx-3">{d.qty}</div>
                              <button
                                className="addqty mx-1"
                                onClick={() => qtyminuscart(d.id)}
                                disabled={d.qty === 1 && true}
                              >
                                -
                              </button>
                            </div>
                          </td>
                          <td className="align-self-center">
                            <div>${d.qty * d.price}</div>
                          </td>
                          <td className="align-self-center">
                            <div
                              className="deleteqty"
                              onClick={() => Deletecart(d.id)}
                            >
                              <i class="fa fa-trash-o" aria-hidden="true"></i>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                    <tr className="row justify-content-center trcolor2">
                      <td>
                        <div className="placeorder">Place order</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-5 col-xl-5">
              <div className="w-100">
                <table className="addtotable">
                  <tr className="row justify-content-center trcolor">
                    <th>TOTEL AMOUNT</th>
                  </tr>
                  <tbody>
                    <tr className="row justify-content-between trcolor1">
                      <td>Price ( {cart.cartdata.length} item )</td>
                      <td>${totelamount}</td>
                    </tr>
                    <tr className="row justify-content-between trcolor1">
                      <td>Discount ( 10% )</td>
                      <td>-${discount}</td>
                    </tr>
                    <tr className="row justify-content-between trcolor1 border_tr">
                      <td>Total price</td>
                      <td>${finelprice}</td>
                    </tr>
                    <tr className="row justify-content-center trcolor2">
                      <td>
                        <p>You will save ${discount} on this order.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Addtocart;
