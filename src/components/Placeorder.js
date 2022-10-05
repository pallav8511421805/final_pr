import React from "react";
import * as yup from "yup";
import { Form, Formik, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Addorderaction } from "../redux/actions/order.action";
import { NavLink, useHistory } from "react-router-dom";

function Placeorder(props) {
  const orderdata = props.location.state;
  const data = orderdata.cart;
  const dispatch = useDispatch();
  const history = useHistory();

  let schema = yup.object().shape({
    fname: yup.string().required("Please enter your name."),
    phone: yup
      .number()
      .min(10000, "Not valid mobile number.")
      .max(99, "Not valid mobile number.")
      .required("Please enter your mobile number."),
    address: yup.string().required("Please enter your address."),
    email: yup
      .string()
      .email("Please enter your valid email.")
      .required("Please enter your email."),
  });

  const formik = useFormik({
    initialValues: {
      fname: "",
      phone: "",
      email: "",
      address: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      handledataadd(values);
    },
  });

  const handledataadd = (val) => {
    data.map((d) => {
      const obj = {
        ...d,
        ...val,
      };
      dispatch(Addorderaction(obj));
    });
    formik.resetForm();
    history.push("/check");
  };

  let { errors, handleBlur, handleChange, handleSubmit, touched } = formik;

  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 ">
            <div className="w-100 my-3">
              <h1 className="placeorderdata">delivery address</h1>
              <Formik value={formik}>
                <Form onSubmit={handleSubmit}>
                  <input
                    name="fname"
                    placeholder="Please enter your name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.fname || touched.fname ? (
                    <p className="errorp">{errors.fname}</p>
                  ) : null}
                  <input
                    name="email"
                    placeholder="Please enter your email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email ? (
                    <p className="errorp">{errors.email}</p>
                  ) : null}
                  <input
                    name="phone"
                    placeholder="Please enter your mobile number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.phone && touched.phone ? (
                    <p className="errorp">{errors.phone}</p>
                  ) : null}
                  <input
                    name="address"
                    placeholder="Please enter your address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.address && touched.address ? (
                    <p className="errorp">{errors.address}</p>
                  ) : null}
                  <button type="submit" className="placeorder1">
                    Submit
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Placeorder;
