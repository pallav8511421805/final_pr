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
  getdata,
} from "../../redux/actions/category.action";

function Category(props) {
  const Dispatch = useDispatch();
  const get_categorydata = useSelector((state) => state.category);

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

  const editcartegory = (params) => {
    handleClickOpen();
    setupdate(true);
    formik.setValues(params.row);
  };

  const handlecategory = (values) => {
    Dispatch(Editdata(values));
    formik.resetForm();
    handleClose();
    setupdate(false);
  };

  const columns = [
    { field: "name", headerName: "Category name", width: 130 },
    {
      field: "cname",
      headerName: "Category image",
      width: 130,
      renderCell: (params) => (
        <>
          <img src={params.row.cname} width={50} height={50} />
        </>
      ),
    },
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
              editcartegory(params);
            }}
          >
            <ModeEditOutlineOutlinedIcon />
          </IconButton>
        </>
      ),
    },
  ];

  const handleinsetdata = (values) => {
    let id = Math.floor(Math.random() * 100);
    const data = {
      id: id,
      ...values,
    };
    Dispatch(Adddata(data));
    handleClose();
    formik.resetForm();
  };

  let schema = yup.object().shape({
    name: yup.string().required("Please enter your category name."),
    cname: yup.mixed().required("Please select your image."),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      cname: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (update) {
        handlecategory(values);
      } else {
        handleinsetdata(values);
      }
    },
  });

  useEffect(() => {
    Dispatch(getdata());
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
      {get_categorydata.isload ? (
        <div style={{ fontSize: 24, color: "#1976d2", textAlign: "center" }}>
          Loading...
        </div>
      ) : get_categorydata.error != "" ? (
        <div style={{ fontSize: 24 }}>{get_categorydata.error}</div>
      ) : (
        <>
          <div>
            <h1>Category</h1>
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
              Add category details
            </Button>
            <Dialog fullWidth open={open} onClose={handleClose}>
              <DialogTitle>Add category</DialogTitle>
              <Formik value={formik}>
                <Form onSubmit={handleSubmit}>
                  <DialogContent>
                    <TextField
                      value={values.name}
                      margin="dense"
                      name="name"
                      label="category name"
                      type="text"
                      fullWidth
                      variant="standard"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.name && touched.name ? (
                      <p style={{ color: "#1976d2" }}>{errors.name}</p>
                    ) : null}
                    <>
                      <p>category image</p>
                      <input
                        type={"file"}
                        name="cname"
                        onChange={(e) => {
                          setFieldValue("cname", e.target.files[0]);
                        }}
                      />
                      {errors.cname && touched.cname ? (
                        <p style={{ color: "#1976d2" }}>{errors.cname}</p>
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
          <div style={{ height: 400, width: "30%", margin: "15px auto" }}>
            <DataGrid
              rows={get_categorydata.category}
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

export default Category;
