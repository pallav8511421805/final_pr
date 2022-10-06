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
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-5 col-lg-10 col-xl-10">
              <div className="w-100">
                <table
                  style={{
                    width: "100%",
                    color: "black",
                  }}
                  border="1"
                >
                  <tr className="px-3 text-black border-1 border-primary text-center">
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
                        <tr className="text-center">
                          <td>{d.fname}</td>
                          <td>{d.email}</td>
                          <td>{d.phone}</td>
                          <td>{d.address}</td>
                          {order.orderdata.map((x) => {
                            x.cartorder.map((m) => {
                              return (
                                <>
                                  <td>
                                    <img src={m.pname} width={50} />
                                  </td>
                                  <td>{m.name}</td>
                                  <td>{m.name}</td>
                                  <td>{m.name}</td>
                                </>
                              );
                            });
                          })}
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
  );
}

export default Orderdata;
