import React from "react";
import * as yup from "yup";
import { Form, Formik, useFormik } from "formik";

function Placeorder(props) {
  const orderdata = props.location.state;
  console.log(orderdata.cart);

  let schema = yup.object().shape({
    name: yup.string().required("Please enter your name."),
    phone: yup.number().required("Please enter your mobile number."),
    address: yup.string().required("Please enter your address."),
    email: yup
      .string()
      .email("Please enter your valid email.")
      .required("Please enter your email."),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  let { errors, handleBlur, handleChange, handleSubmit, touched } = formik;

  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 ">
            <div className="w-100 my-3">
              <h1 className="placeorderdata">Add your data</h1>
              <Formik values={formik}>
                <Form onSubmit={handleSubmit}>
                  <input
                    name="name"
                    placeholder="Please enter your name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.name || touched.name ? (
                    <p className="errorp">{errors.name}</p>
                  ) : null}
                  <input
                    name="email"
                    placeholder="Please enter your email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <input
                    name="phone"
                    maxLength={10}
                    placeholder="Please enter your mobile number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <input
                    name="address"
                    placeholder="Please enter your address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
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
