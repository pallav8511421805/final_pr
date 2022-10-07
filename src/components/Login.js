import React, { useState } from "react";
import * as yup from "yup";
import { Form, Formik, useFormik } from "formik";
import { useDispatch } from "react-redux";
import {
  forgetpasswordaction,
  signinaction,
  signingoogle,
  signupaction,
} from "../redux/actions/auth.action";
function Login(props) {
  const [usertype, setusertype] = useState("Log in");
  const [reset, setreset] = useState(false);
  const dispatch = useDispatch();

  let initialVal;
  let mainschema;
  if (usertype == "Log in" && reset === false) {
    initialVal = {
      password: "",
      email: "",
    };
    mainschema = yup.object().shape({
      email: yup
        .string()
        .email("Please enter your vaild email id.")
        .required("Please enter your email id."),
      password: yup.string().required("Please enter your password."),
    });
  } else if (usertype == "Sign up" && reset === false) {
    initialVal = {
      name: "",
      password: "",
      email: "",
    };
    mainschema = yup.object().shape({
      name: yup
        .string()
        .matches("^[a-zA-Z ]*$", "Please enter valid name.")
        .required("Please enter your name."),
      email: yup
        .string()
        .email("Please enter your vaild email id.")
        .required("Please enter your email id."),
      password: yup.string().required("Please enter your password."),
    });
  } else if (reset == true) {
    initialVal = {
      email: "",
    };
    mainschema = yup.object().shape({
      email: yup
        .string()
        .email("Please enter your vaild email id.")
        .required("Please enter your email id."),
    });
  }

  let schema = mainschema;

  const HandlePassword = (values) => {
    dispatch(forgetpasswordaction(values));
  };

  const formik = useFormik({
    initialValues: initialVal,
    validationSchema: schema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (usertype === "Log in" && !reset) {
        dispatch(signinaction(values));
      } else if (reset) {
        dispatch(HandlePassword(values));
      } else if (usertype === "Sign up" && !reset) {
        dispatch(signupaction(values));
      }
    },
  });
  let { errors, handleBlur, handleSubmit, touched, values, handleChange } =
    formik;

  const handlegoogle = () => {
    dispatch(signingoogle());
  };
  return (
    <>
      <div>
        <section className="why_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2 cheack_box">
                {reset ? (
                  <h3 className="text_h3 my-3">Forget password</h3>
                ) : usertype === "Log in" ? (
                  <h3 className="text_h3 my-3">Log in</h3>
                ) : (
                  <h3 className="text_h3 my-3">Sign up</h3>
                )}
                <div className="full">
                  <Formik values={formik}>
                    <Form onSubmit={handleSubmit} className="php-email-form">
                      <>
                        {usertype === "Log in" ? null : (
                          <>
                            <div className="row justify-content-center">
                              <div className="col-md-8 form-group mb-0">
                                <input
                                  name="name"
                                  className="my_input"
                                  id="name"
                                  placeholder="Your Name"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.name}
                                />
                                {errors.name && touched.name ? (
                                  <p className="text-center errorclass">
                                    {errors.name}
                                  </p>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                            <div className="row justify-content-center">
                              <div className="col-md-8 form-group mb-0">
                                <input
                                  type="email"
                                  className="my_input"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.email}
                                />
                                {errors.email && touched.email ? (
                                  <p className="text-center errorclass">
                                    {errors.email}
                                  </p>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>

                            <div className="row justify-content-center">
                              <div className="col-md-8 form-group mb-0">
                                <input
                                  type="password"
                                  name="password"
                                  className="my_input"
                                  id="password"
                                  placeholder="Your password"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.password}
                                />
                                {errors.password && touched.password ? (
                                  <p className="text-center errorclass">
                                    {errors.password}
                                  </p>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          </>
                        )}

                        {reset ? (
                          <div className="row justify-content-center">
                            <div className="col-md-8 form-group mb-0">
                              <input
                                type="email"
                                className="my_input"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                              />
                              {errors.email && touched.email ? (
                                <p className="text-center errorclass">
                                  {errors.email}
                                </p>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        ) : usertype == "Log in" ? (
                          <>
                            <div className="row justify-content-center">
                              <div className="col-md-8 form-group mb-0">
                                <input
                                  type="email"
                                  className="my_input"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.email}
                                />
                                {errors.email && touched.email ? (
                                  <p className="text-center errorclass">
                                    {errors.email}
                                  </p>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>

                            <div className="row justify-content-center">
                              <div className="col-md-8 form-group mb-0">
                                <input
                                  type="password"
                                  name="password"
                                  className="my_input"
                                  id="password"
                                  placeholder="Your password"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.password}
                                />
                                {errors.password && touched.password ? (
                                  <p className="text-center errorclass">
                                    {errors.password}
                                  </p>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          </>
                        ) : null}
                      </>
                      {reset ? (
                        <div className="text-center my-3">
                          <button className="product_login" type="submit">
                            submit
                          </button>
                        </div>
                      ) : usertype === "Log in" ? (
                        <div className="text-center my-3">
                          <button className="product_login" type="submit">
                            Log in
                          </button>
                        </div>
                      ) : (
                        <div className="text-center my-3">
                          <button className="product_login" type="submit">
                            Sign up
                          </button>
                        </div>
                      )}
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          {usertype === "Log in" && reset === false ? (
            <div className="d-flex justify-content-center my-3">
              <button className="product_login2" onClick={() => handlegoogle()}>
                <img src="images/search.png" width={20} />
                <span className="px-2">Sign in with google</span>
              </button>
            </div>
          ) : null}
          <div className="d-flex justify-content-center">
            {reset ? null : usertype === "Log in" ? (
              <div className="text-center my-3">
                <button
                  className="product_login"
                  onClick={() => {
                    setreset(true);
                  }}
                >
                  Forgot password ?
                </button>
              </div>
            ) : null}
          </div>
        </section>
        <section>
          <div className="container">
            <div className="d-flex justify-content-center">
              {reset ? null : usertype === "Log in" ? (
                <p>
                  Create a new account ?{" "}
                  <span>
                    <a
                      className="product_login1"
                      onClick={() => {
                        setusertype("Sign up");
                        setreset(false);
                      }}
                    >
                      Sign up
                    </a>
                  </span>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <span>
                    <a
                      className="product_login1"
                      onClick={() => {
                        setusertype("Log in");
                        setreset(false);
                      }}
                    >
                      Log in
                    </a>
                  </span>
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
