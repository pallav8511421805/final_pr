import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { Getorderaction } from "../../redux/actions/order.action";
function Orderdata(props) {
  const orderdata = useSelector((state) => state.orderroot);
  const dispaly_order = orderdata.orderdata;
  console.log(dispaly_order);
  const dispaly_table = [];
  const data_table = [];
  dispaly_order.map((d) => {
    data_table.push(d);
  });
  data_table.map((d, i) => {
    const orderdata = {
      ...d[i],
      d_address: d.address,
      d_email: d.email,
      d_fname: d.fname,
      d_phone: d.phone,
    };
    dispaly_table.push(orderdata);
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Getorderaction());
  }, []);
  const columns = [{ field: "fname", headerName: "User Name", width: 130 }];
  return (
    <div style={{ height: 400, width: "80%", margin: "auto" }}>
      <DataGrid
        rows={dispaly_table}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

export default Orderdata;
