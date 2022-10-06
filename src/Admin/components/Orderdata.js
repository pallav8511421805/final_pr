import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Getorderaction } from "../../redux/actions/order.action";
function Orderdata(props) {
  const orderdata = useSelector((state) => state.orderroot);
  const dispaly_order = orderdata.orderdata;
  const dispatch = useDispatch();
  console.log(dispaly_order);
  useEffect(() => {
    dispatch(Getorderaction());
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-5 col-lg-10 col-xl-10">
              <div className="w-100">
                <table className="addtotable">
                  <tr className="row justify-content-between trcolor">
                    <th>Products</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>User name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                  </tr>
                  <tbody>
                    <tr className="row justify-content-between trcolor1">
                      {dispaly_order.cartorder.map((d) => {
                        return (
                          <>
                            <td className="align-self-center">{d.name}</td>
                            <td className="align-self-center">{d.qty}</td>
                            <td className="align-self-center">{d.price}</td>
                          </>
                        );
                      })}
                      <td className="align-self-center">
                        {dispaly_order.fname}
                      </td>
                      <td className="align-self-center">
                        {dispaly_order.email}
                      </td>
                      <td className="align-self-center">
                        {dispaly_order.phone}
                      </td>
                      <td className="align-self-center">
                        {dispaly_order.address}
                      </td>
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
  );
}

export default Orderdata;
