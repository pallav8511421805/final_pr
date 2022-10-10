import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Deletecartaction } from "../redux/actions/cart.action";
import { decrementqty, incrementqty } from "../redux/actions/cart.action";
import { getproduct_data } from "../redux/actions/product.actions";
import {setalertaction} from "../redux/actions/alert.action";
function Addtocart(props) {
  const cart = useSelector((state) => state.cartroot);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productroot);
  const history = useHistory()

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

  const placeorder = () => {
    if(CartData.length === 0){
      dispatch(
        setalertaction({ text: "Please buy any product.", color: "error" })
      );
    } else {
      history.push("/placeorder",{ cart: CartData })
    }
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
                <thead>
                  <tr>
                  <th>Products</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove item</th>
                  </tr>
                </thead>
                <tbody>
                  
                    {CartData.map((d) => {
                    return(
                    <>
                    <tr>
                    <td><div className="d-flex justify-content-start">
                    <img src={d.pname} width="25px" />{ "  " + d.name}
                      </div></td>
                    <td>
                    <div className="d-flex">
                    <button className="addqty mx-3" onClick={() => qtyminuscart(d.id)} disabled={d.qty === 1 && true} >
                    -
                    </button>
                    {d.qty}
                    <button className="addqty mx-3" onClick={() => qtypluscart(d.id)} >
                    +
                    </button>
                    </div>
                    </td>
                    <td>${d.price}</td>
                    <td>
                      <div className="d-flex justify-content-center">
                      <div className="deleteqty" onClick={() => Deletecart(d.id)}>
                      <i class="fa fa-trash-o" aria-hidden="true"></i>
                    </div>
                      </div>
                    </td>
                    </tr>
                    </>
                    )
                    })
                    }
                </tbody>
                </table>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-5 col-xl-5">
              <div className="w-100">
              <table className="addtotable">
                <thead>
                  <tr>
                  <th>PRICE & DISCOUNT</th>
                  <th>TOTEL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>Price ( {cart.cartdata.length} item )</td>
                  <td>${totelamount}</td>
                  </tr>
                  <tr>
                  <td>Discount ( 10% )</td>
                  <td>-${discount}</td>
                  </tr>
                  <tr>
                  <td>Total price</td>
                  <td>${finelprice}</td>
                  </tr>
                  <tr>
                  <td>
                    <p>You will save on this order.</p>
                  </td>
                  <td>
                  ${discount}
                  </td>
                  </tr>
                </tbody>
              </table>
              </div>
              </div>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="container">
          <div className="row justify-content-end">
            <button
              className="placeorder"
             onClick={()=>placeorder()} 
          >
              Place order
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Addtocart;
