import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Getorderaction } from "../../redux/actions/order.action";
function Orderdata(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Getorderaction());
  }, []);

  const order = useSelector((state) => state.orderroot);

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
                          borderBottom: "1px solid black",
                        }}
                      >
                        <th>User name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Product</th>
                      </tr>
                      <tbody>
                        {order.orderdata.map((d) => {
                          return (
                            <tr
                              className="px-3 text-black text-center"
                              style={{
                                borderBottom: "1px solid black",
                              }}
                            >
                              <td>{d.fname}</td>
                              <td>{d.email}</td>
                              <td>{d.phone}</td>
                              <td>{d.address}</td>
                              {/* <td>
                                {d.cartorder.map((x) => {
                                  return <img src={x.pname} width={50} />;
                                })}
                              </td> */}
                              <td>
                                {d.cartorder.map((x) => {
                                  return (
                                    <>
                                      <img src={x.pname} width={50} />
                                      Name: {x.name}, Quantity: {x.qty}
                                      <br />
                                    </>
                                  );
                                })}
                              </td>
                              {/* <td>
                                {d.cartorder.map((x) => {
                                  return (
                                    <div className="border-1 border-primry">
                                      {x.qty}
                                    </div>
                                  );
                                })}
                              </td>
                              <td>
                                {d.cartorder.map((x) => {
                                  return (
                                    <div className="border-1 border-primry">
                                      {x.price}
                                    </div>
                                  );
                                })}
                              </td> */}
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
