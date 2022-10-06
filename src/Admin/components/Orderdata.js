import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Getorderaction } from "../../redux/actions/order.action";
function Orderdata(props) {
  const orderdata = useSelector((state) => state.orderroot);
  const dispaly_order = orderdata.orderdata;
  const dispatch = useDispatch();
  // dispaly_order.cartorder
  useEffect(() => {
    dispatch(Getorderaction());
  }, []);

  return (
    <>
      <div style={{ height: 400, width: "80%", margin: "auto" }}>
        <table style={{ width: "80" }}>
          <th>fhhdf</th>
        </table>
      </div>
    </>
  );
}

export default Orderdata;
