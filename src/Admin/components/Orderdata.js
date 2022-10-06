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
    { field: "fname", headerName: "User Name", width: 130 },
    { field: "address", headerName: "Address", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    { field: "phone", headerName: "Mobile number", width: 130 },
    {
      field: "pname",
      headerName: "Product image",
      width: 130,
      renderCell: (params) => (
        <>
          <img src={params.row.pname} width={50} height={50} />
        </>
      ),
    },
    { field: "name", headerName: "Product name", width: 130 },
    { field: `price`, headerName: "Product price ($)", width: 130 },
    { field: `qty`, headerName: "Product qty", width: 130 },
  ];
  return (
    <>
      <div style={{ height: 400, width: "80%", margin: "auto" }}>
        <DataGrid
          rows={dispaly_order}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </>
  );
}

export default Orderdata;
