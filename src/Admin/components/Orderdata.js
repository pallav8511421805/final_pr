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
  const columns = [
    { field: "name", headerName: "", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
  ];
  return (
    <div style={{ height: 400, width: "80%", margin: "auto" }}>
      <DataGrid
        rows={dispaly_order}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default Orderdata;
