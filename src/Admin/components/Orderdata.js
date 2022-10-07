import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Getorderaction } from "../../redux/actions/order.action";
function Orderdata(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Getorderaction());
  }, []);

  const order = useSelector((state) => state.orderroot);

  order.orderdata.map((d) => {
    d.cartorder.map((d) => {
      console.log(d);
    });
  });

  return (
    <>
      {order.isload ? (
        <div
          className="text-center text-primary fw-bold"
          style={{ fontSize: "24px" }}
        >
          Loading....
        </div>
      ) : (
        <>
          <section>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-5 col-lg-10 col-xl-10">
                  <div className="w-100">
                    <table
                      style={{
                        width: "100%",
                        color: "black",
                        border: "1px solid black",
                      }}
                    >
                      <tr
                        className="px-3 text-black text-center"
                        style={{
                          border: "1px solid black",
                        }}
                      >
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
                        {order.orderdata.map((d) => {
                          return (
                            <tr
                              className="px-3 text-black text-center"
                              style={{
                                border: "1px solid black",
                              }}
                            >
                              <td>{d.fname}</td>
                              <td>{d.email}</td>
                              <td>{d.phone}</td>
                              <td>{d.address}</td>
                              <td>
                                {order.orderdata.map((d) => {
                                  d.cartorder.map((d) => {
                                    <img src={d.pname} width={50} />;
                                  });
                                })}
                              </td>
                              <td>
                                {order.orderdata.map((d) => {
                                  d.cartorder.map((d) => {
                                    return <div>{d.name}</div>;
                                  });
                                })}
                              </td>
                              <td>
                                {order.orderdata.map((d) => {
                                  d.cartorder.map((d) => {
                                    return <div>{d.qty}</div>;
                                  });
                                })}
                              </td>
                              <td>
                                {order.orderdata.map((d) => {
                                  d.cartorder.map((d) => {
                                    return <div>{d.price}</div>;
                                  });
                                })}
                              </td>
                            </tr>
                          );
                        })}
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
