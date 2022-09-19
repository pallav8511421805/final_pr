import React, { useState } from 'react';
import * as yup from 'yup';
import {Form, Formik, useFormik} from 'formik';
import { useDispatch } from 'react-redux';
import * as ActionTypes from '../redux/actiontypes';

function Login(props) {
  const [usertype, setusertype] = useState("Log in");
  const [reset, setreset] = useState(false);
  const dispatch = useDispatch();
      
  let initialVal;
  let mainschema;
  if(usertype == "Log in"){
    initialVal ={
      password:'',
      email: '',
    }
    mainschema = yup.object().shape({
      email: yup.string().email("Please enter your vaild email id.").required("Please enter your email id."),
      password: yup.string().required("Please enter your password.")
    });
  } else if(usertype == "Sign up"){
    initialVal ={
      name: '',
      password:'',
      email: '',
    }
    mainschema = yup.object().shape({
      name: yup.string().required("Please enter your name."),
      email: yup.string().email("Please enter your vaild email id.").required("Please enter your email id."),
      password: yup.string().required("Please enter your password.")
    });
  } else if (reset == true){
    initialVal ={
       email: '',
    }
    mainschema = yup.object().shape({
      email: yup.string().email("Please enter your vaild email id.").required("Please enter your email id."),
    });
  }

    let schema = mainschema;

    const handlelogin = (values)=>{
      // localStorage.setItem('user','123');
      dispatch({type:ActionTypes.signup,payload:values})
    } 

    const formik = useFormik({
      initialValues: initialVal,
     validationSchema : schema,  
      onSubmit: values => {
        if(usertype === "Log in"){
          handlelogin(values);
        } else{
          alert(JSON.stringify(values, null, 2));
        }
      },
    }
    )
    let {errors,handleBlur,handleSubmit,touched,values ,handleChange} = formik;
  
  return (
    <div className="container">
      <div className="section-title">
        {
          reset ? <h2>Forget password</h2> : usertype === "Log in" ? <h2>Log in</h2> :
            <h2>Sign up</h2>
        }
      </div>
      <div className="row mt-5">
        <div className="col-lg-12 mt-5 mt-lg-0">
          <Formik validationSchema>
          <Form onSubmit={handleSubmit} className="php-email-form">
            <>
              {
                usertype === "Log in" ? null :
                  <>
                    <div className="row justify-content-center">
                      <div className="col-md-6 form-group my-1">
                        <input type="text" name="name" className="form-control shadow-none" id="name" placeholder="Your Name"
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        value={values.name}
                        />
                      </div>
                      {errors.name || touched.name ?<p className='text-center'>{errors.name}</p>: ""}
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-md-6 form-group my-1">
                        <input type="email" className="form-control shadow-none" name="email" id="email" placeholder="Your Email" 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        value={values.email}
                        />
                      </div>
                      {errors.email && touched.email ? <p className='text-center'>{errors.email}</p>: ""}
                    </div>

                    <div className="row justify-content-center">
                      <div className="col-md-6 form-group my-1">
                        <input type="password" name="password" className="form-control shadow-none" id="password" placeholder="Your password"
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        value={values.password}
                        />
                      </div>
                      {errors.password && touched.password ? <p className='text-center'>{errors.password}</p>: ""}
                    </div>
                  </>
              }

              {
                reset ?
                  <div className="row justify-content-center">
                    <div className="col-md-6 form-group my-1">
                      <input type="email" className="form-control shadow-none" name="email" id="email" placeholder="Your Email"
                      onChange={handleChange} 
                      onBlur={handleBlur}
                      value={values.email}
                      />
                    </div>
                    {errors.email && touched.email ? <p className='text-center'>{errors.email}</p>: ""}
                  </div>
                  :
                  usertype == "Log in" ?
                    <>
                      <div className="row justify-content-center">
                        <div className="col-md-6 form-group my-1">
                          <input type="email" className="form-control shadow-none" name="email" id="email" placeholder="Your Email" 
                          onChange={handleChange} 
                          onBlur={handleBlur}
                          value={values.email}/>
                        </div>
                        {errors.email && touched.email ? <p className='text-center'>{errors.email}</p>: ""}
                      </div>

                      <div className="row justify-content-center">
                        <div className="col-md-6 form-group my-1">
                          <input type="password" name="password" className="form-control shadow-none" id="password" placeholder="Your password" 
                          onChange={handleChange} 
                          onBlur={handleBlur}
                          value={values.password}
                          />
                        </div>
                        {errors.password && touched.password ? <p className='text-center'>{errors.password}</p>: ""}
                      </div>
                    </>
                    : null
              }

              {
                reset ? null : usertype === "Log in" ? <div className="text-center my-3">
                  <button className="appointment-btn scrollto border-0 ms-0" onClick={() => {
                    setreset(true);
                  }}>Forgot password ?</button></div> : null
              }

            </>
            {
              reset ? <div className="text-center my-3"><button className="appointment-btn scrollto border-0">Change password</button></div> : usertype === "Log in" ? <div className="text-center my-3"><button className="appointment-btn scrollto border-0" type='submit'>Log in</button></div> : <div className="text-center my-3"><button className="appointment-btn scrollto border-0" type='submit'>Sign up</button></div>
            }
            <div className="text-center">
              {
                reset ? null : usertype === "Log in" ?
                  <p>Create a new account <span>
                    <a className="appointment-btn scrollto border-0 ms-0" onClick={() => { setusertype("Sign up"); setreset(false) }}>Log in</a>
                  </span>
                  </p>
                  : <p>Already have an account? <span>
                    <a className="appointment-btn scrollto border-0 ms-0" onClick={() => { setusertype("Log in"); setreset(false) }}>Sign up</a>
                  </span></p>
              }
            </div>
          </Form>
          </Formik>
        </div>
      </div>
    </div>

  );
}

export default Login;

// import React, { useState } from 'react';

// function Login(props) {
//     let [usertype,setUsertype] = useState('login');
//     let [reset,setReset] = useState(false)
//     return (
//         <>
// <div>
//   <section className="inner_page_head">
//     <div className="container_fuild">
//       <div className="row">
//         <div className="col-md-12">
//           <div className="full">
//             <h3>Login</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//   {/* end inner page section */}
//   {/* why section */}
//   <section className="why_section layout_padding">
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-8 offset-lg-2">
//           <div className="full">
//             <form action="index.html">
//               <fieldset>
//                 <input type="text" placeholder="Enter your full name" name="name" />
//                 <input type="email" placeholder="Enter your email address" name="email" />
//                 <input type="Password" placeholder="Enter Password" name="Password"/>
//                 <div className='text-center'>
//                 <button type='submit' className='product_login'>Log in</button>
//                 </div>
//               </fieldset>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>

//   <section>
//     <div className='container'>
//     <div className='d-flex justify-content-center'>
//     {
//         reset ? null : usertype === "login" ?
//         <p>Create a new account <span>
//         <a className="product_login" onClick={() => { setUsertype("signup"); setReset(false) }}>Log in</a>
//         </span>
//         </p>
//     : <p>Already have an account? <span>
//     <a className="product_login" onClick={() => { setUsertype("login"); setReset(false) }}>Sign up</a>
//     </span></p>
//     }
//     </div>
//     </div>
//   </section>
//   {/* end why section */}
//   {/* arrival section */}
//   <section className="arrival_section">
//     <div className="container">
//       <div className="box">
//         <div className="arrival_bg_box">
//           <img src="images/arrival-bg.png" alt />
//         </div>
//         <div className="row">
//           <div className="col-md-6 ml-auto">
//             <div className="heading_container remove_line_bt">
//               <h2>
//                 #NewArrivals
//               </h2>
//             </div>
//             <p style={{marginTop: 20, marginBottom: 30}}>
//               Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
//             </p>
//             <a href>
//               Shop Now
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// </div>

//         </>
//     );
// }

// export default Login;