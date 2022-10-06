import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Getorderaction } from "../../redux/actions/order.action";
function Orderdata(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Getorderaction());
  }, []);

  const order = useSelector((state) => state.orderroot);

  let Cartorder = [];
  let Cartorderdata = [];

  let obj;

  order.orderdata.map((d) => {
    obj = {
      address: d.address,
      phone: d.phone,
      email: d.email,
      fname: d.fname,
    };
  });

  order.orderdata.map((d) => {
    d.cartorder.map((d) => {
      let obj = {
        ...d,
      };
      Cartorder.push(obj);
    });
  });

  Cartorder.map((d) => {
    let objdata = {
      ...obj,
      ...d,
    };
    Cartorderdata.push(objdata);
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
                        {Cartorderdata.map((d) => {
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
                                <img src={d.pname} width={50} />
                              </td>
                              <td>{d.name}</td>
                              <td>{d.qty}</td>
                              <td>{d.price}</td>
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
