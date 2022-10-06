import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Getorderaction } from "../../redux/actions/order.action";
function Orderdata(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Getorderaction());
  }, []);

  const order = useSelector((state) => state.orderroot);
  // console.log(order.isload, order.error);
  order.orderdata.map((d) => {
    console.log(d.fname, d.address, d.phone, d.email);
    d.cartorder.map((c) => {
      console.log(c.name, c.qty, c.price, c.pname);
    });
  });
  return (
    <>
      {order.isload ? (
        <div style={{ fontSize: 24, color: "#1976d2", textAlign: "center" }}>
          Loading...
        </div>
      ) : order.error != "" ? (
        <div style={{ fontSize: 24 }}>{order.error}</div>
      ) : (
        <>
          <section>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-5 col-lg-10 col-xl-10">
                  <div className="w-100">
                    <table className="addtotable">
                      <tr className="row justify-content-between trcolor">
                        <th>User name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Product</th>
                        <th>Product name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                      <tbody>
                        <tr className="row justify-content-between trcolor1">
                          {order.orderdata.map((d) => {
                            return (
                              <>
                                <td>{d.fname}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                                <td>{d.address}</td>
                              </>
                            );
                          })}
                          {order.orderdata.map((d) => {
                            d.cartorder.map((c) => {
                              return (
                                <>
                                  <td>
                                    <img src={c.pname} width={50} />
                                  </td>
                                  <td>{c.name}</td>
                                  <td>{c.qty}</td>
                                  <td>{c.price}</td>
                                </>
                              );
                            });
                          })}
                        </tr>
                        <tr className="row justify-content-between trcolor2"></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default Orderdata;
