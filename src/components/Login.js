import React, { useState } from 'react';

function Login(props) {
    let [usertype,setUsertype] = useState('login');
    let [reset,setReset] = useState(false)
    return (
        <>
<div>
  <section className="inner_page_head">
    <div className="container_fuild">
      <div className="row">
        <div className="col-md-12">
          <div className="full">
        {
          reset ? <h3>Forget password</h3> : usertype === "login" ? <h3>Log in</h3> :
          <h3>Sign up</h3>
        }
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end inner page section */}
  {/* why section */}
  <section className="why_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="full">
            <form action="index.html">
              <fieldset>
                {
                    usertype === 'login' ? null : 
                    <>
                    <input type="text" placeholder="Enter your full name" name="name" />
                <input type="email" placeholder="Enter your email address" name="email" />
                <input type="Password" placeholder="Enter your Password" name="Password"/>
                    </>
                }
                {
                    reset ? 
                    <input type="email" placeholder="Enter your email address" name="email" /> :
                    usertype === 'login' ? <>
                    <input type="email" placeholder="Enter your email address" name="email" />
                <input type="Password" placeholder="Enter your Password" name="Password"/>
                    </> : null
                }
                <div className='text-center'>
                {
                    reset ? <button type='submit' className='product_login'>Change password</button> : usertype === 'login' ? <button type='submit' className='product_login'>Log in</button> : <button type='submit' className='product_login'>Sign up</button>
                }
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className='container'>
    <div className='d-flex justify-content-center'>
    {
        reset ? null : usertype === "login" ?
        <p>Create a new account <span>
        <a className="product_login" onClick={() => { setUsertype("signup"); setReset(false) }}>Log in</a>
        </span>
        </p>
    : <p>Already have an account? <span>
    <a className="product_login" onClick={() => { setUsertype("login"); setReset(false) }}>Sign up</a>
    </span></p>
    }
    </div>
    </div>
  </section>
  {
                reset ? null : usertype === "login" ? <div className="text-center my-3">
                  <button className="product_login" onClick={() => {
                    setReset(true);
                  }}>Forgot password ?</button></div> : null
    }
</div>

        </>
    );
}

export default Login;