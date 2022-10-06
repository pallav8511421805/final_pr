import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Getorderaction } from "../../redux/actions/order.action";
function Orderdata(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Getorderaction());
  }, []);

  let Cartorder = [];
  let CartorderData = [];
  let addressdata;
  const order = useSelector((state) => state.orderroot);
  order.orderdata.map((d) => {
    d.cartorder.map((d) => {
      CartorderData.push(d);
    });
  });
  order.orderdata.map((d) => {
    addressdata = {
      A_name: d.fname,
      A_address: d.address,
      A_email: d.email,
      A_phone: d.phone,
    };
    Cartorder.push(addressdata);
  });
  console.log(CartorderData);
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
