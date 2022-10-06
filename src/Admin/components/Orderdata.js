import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Getorderaction } from "../../redux/actions/order.action";
function Orderdata(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Getorderaction());
  }, []);

  const cartorder = [];

  const order = useSelector((state) => state.orderroot);
  order.orderdata.map((d) => {
    cartorder.push(d.cartorder);
  });

  cartorder.map((d) => {
    console.log(d);
  });
  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-5 col-lg-10 col-xl-10">
              <div className="w-100">
                {/* <table className="addtotable">
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
                </table> */}

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
                  {/* <tr className="px-3">
                    <td rowSpan={8}>czcx</td>
                    <td rowSpan={8}>Zxxzxz</td>
                    <td rowSpan={8}>xhnhcx</td>
                    <td rowSpan={8}>cxknz</td>
                  </tr>
                  <tr className="px-3">
                    <td>sxznzc</td>
                    <td>jjc</td>
                    <td>hhcs</td>
                    <td>zxhhX</td>
                  </tr>
                  <tr className="px-3">
                    <td>sxznzc</td>
                    <td>jjc</td>
                    <td>hhcs</td>
                    <td>zxhhX</td>
                  </tr>
                  <tr className="px-3">
                    <td>sxznzc</td>
                    <td>jjc</td>
                    <td>hhcs</td>
                    <td>zxhhX</td>
                  </tr> */}
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
