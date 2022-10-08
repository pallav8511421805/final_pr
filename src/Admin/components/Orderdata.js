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
                <div className="col-12">
                  <div className="w-100">
                  <table className="addtotable">
                <thead>
                  <tr>
                        <th>User name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Product</th>
                  </tr>
                </thead>
                <tbody>
                {order.orderdata.map((d) => {
                          return (
                            <tr>
                              <td>{d.fname}</td>
                              <td>{d.email}</td>
                              <td>{d.phone}</td>
                              <td>{d.address}</td>
                              
                              <td>
                                {d.cartorder.map((x) => {
                                  return (
                                    <>
                                    
                                      <div style={{border:'1px solid white'}}>
                                      <img src={x.pname} width={50} className="align-self-center"/>
                                      <div className="align-self-center">
                                      <div className="mx-1">Name : {x.name}</div>
                                      <div className="mx-1">Qty : {x.qty}</div>
                                      <div className="mx-1">Price : {x.price}</div>
                                      </div>
                                      </div>
                                    
                                    </>
                                  );
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
