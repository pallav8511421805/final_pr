import React, { useEffect, useState } from "react";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Form, Formik, useFormik } from "formik";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import {
  Adddata,
  Deletedata,
  Editdata,
  getproduct_data,
} from "../../redux/actions/product.actions";

function Product(props) {
  const Dispatch = useDispatch();
  const getdata_product = useSelector((state) => state.productroot);

  const [open, setOpen] = React.useState(false);
  const [data, setdata] = useState([]);
  const [update, setupdate] = useState(false);
  const [dopen, setdOpen] = React.useState(false);

  const handledClickOpen = () => {
    setdOpen(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setdOpen(false);
  };

  const handleddelete = () => {
    Dispatch(Deletedata(data));
    handleClose();
  };

  const columns = [
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
    { field: "price", headerName: "Price", width: 130 },
    { field: "description", headerName: "product description", width: 200 },
    { field: "categoryselect", headerName: "Category", width: 130 },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => (
        <>
          <IconButton
            aria-label="delete"
            color="primary"
            onClick={() => {
              handledClickOpen();
              setdata(params.row);
            }}
          >
            <DeleteOutlineIcon />
          </IconButton>
          <IconButton
            aria-label="Edit"
            color="primary"
            onClick={() => {
              editproduct(params);
            }}
          >
            <ModeEditOutlineOutlinedIcon />
          </IconButton>
        </>
      ),
    },
  ];

  const editproduct = (params) => {
    handleClickOpen();

    setupdate(true);

    formik.setValues(params.row);
  };

  const handleproduct = (values) => {
    Dispatch(Editdata(values));
    formik.resetForm();
    handleClose();
    setupdate(false);
  };

  const handleinsetdata = (values) => {
    let Mid = Math.floor(Math.random() * 100);
    const data = {
      id: Mid,
      ...values,
    };
    Dispatch(Adddata(data));
    handleClose();
    formik.resetForm();
  };

  let schema = yup.object().shape({
    name: yup.string().required("Please enter your product name."),
    description: yup
      .string()
      .required("Please enter your product description."),
    price: yup
      .number()
      .positive("Please enter your product valid price.")
      .integer()
      .required("Please enter your product price."),
    categoryselect: yup
      .string()
      .required("Please select your product category."),
    pname: yup.mixed().required("Please select your image."),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      categoryselect: "",
      pname: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (update) {
        handleproduct(values);
      } else {
        handleinsetdata(values);
      }
    },
  });

  useEffect(() => {
    Dispatch(getproduct_data());
  }, []);

  let {
    errors,
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = formik;
  return (
    <>
      {getdata_product.isload ? (
        <div style={{ fontSize: 24, color: "#1976d2", textAlign: "center" }}>
          Loading...
        </div>
      ) : getdata_product.error != "" ? (
        <div style={{ fontSize: 24 }}>{getdata_product.error}</div>
      ) : (
        <>
          <div>
            <h1>Products</h1>
          </div>
          <>
            <Dialog
              open={dopen}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Are you sure to Delete?"}
              </DialogTitle>
              <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button onClick={handleddelete} autoFocus>
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          </>
          <div>
            <Button variant="outlined" onClick={handleClickOpen}>
              Add product details
            </Button>
            <Dialog fullWidth open={open} onClose={handleClose}>
              <DialogTitle>Add product</DialogTitle>
              <Formik value={formik}>
                <Form onSubmit={handleSubmit}>
                  <DialogContent>
                    <TextField
                      value={values.name}
                      margin="dense"
                      name="name"
                      label="Product name"
                      type="text"
                      fullWidth
                      variant="standard"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.name && touched.name ? (
                      <p style={{ color: "#1976d2" }}>{errors.name}</p>
                    ) : null}
                    <TextField
                      value={values.description}
                      margin="dense"
                      name="description"
                      label="Product description"
                      fullWidth
                      variant="standard"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.description && touched.description ? (
                      <p style={{ color: "#1976d2" }}>{errors.description}</p>
                    ) : null}
                    <TextField
                      value={values.price}
                      margin="dense"
                      name="price"
                      label="Price"
                      fullWidth
                      variant="standard"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.price && touched.price ? (
                      <p style={{ color: "#1976d2" }}>{errors.price}</p>
                    ) : null}
                    <TextField
                      value={values.categoryselect}
                      margin="dense"
                      name="categoryselect"
                      label="categoryselect"
                      fullWidth
                      variant="standard"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.categoryselect && touched.categoryselect ? (
                      <p style={{ color: "#1976d2" }}>
                        {errors.categoryselect}
                      </p>
                    ) : null}
                    <>
                      <p>Product image</p>
                      <input
                        type={"file"}
                        name="pname"
                        onChange={(e) => {
                          setFieldValue("pname", e.target.files[0]);
                        }}
                      />
                      {errors.pname && touched.pname ? (
                        <p style={{ color: "#1976d2" }}>{errors.pname}</p>
                      ) : null}
                    </>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    {update ? (
                      <Button type="submit">Update</Button>
                    ) : (
                      <Button type="submit">Submit</Button>
                    )}
                  </DialogActions>
                </Form>
              </Formik>
            </Dialog>
          </div>
          <div style={{ height: 400, width: "80%", margin: "15px auto" }}>
            <DataGrid
              rows={getdata_product.productdata}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Product;
