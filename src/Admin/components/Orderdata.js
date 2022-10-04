import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { Getorderaction } from "../../redux/actions/order.action";
function Orderdata(props) {
  const orderdata = useSelector((state) => state.orderroot);
  const dispaly_order = orderdata.orderdata;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Getorderaction());
  }, []);
  const columns = [{ field: "fname", headerName: "User Name", width: 130 }];
  return (
    <div style={{ height: 400, width: "80%", margin: "auto" }}>
      <DataGrid
        rows={dispaly_order}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

export default Orderdata;
