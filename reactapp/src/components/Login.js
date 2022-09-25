import { Formik } from 'formik';
import React from 'react'
import Swal from "sweetalert2";

const Login = () => {
  // 1. submit function

  
  

    // instruction to store data in database 
    const loginSubmit = async (formdata, { resetForm }) => {
      console.log(formdata)
      resetForm();
  
      const response = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body : JSON.stringify(formdata),
              headers : {
                  'Content-Type' : 'application/json'
              }
      })
  
      if(response.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Logedin'
        })
  
        const data = await response.json();
        sessionStorage.setItem('user', JSON.stringify(data));
  
  
      }else if((response.status === 401)){
        Swal.fire({
          icon : 'error',
          title : 'Login Failed'
        })
      }else{
        console.log('unknown error ocuured');
      }
  
      // data to store in database
    }

  return (
    <div>
        <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
          <div className="card-body p-5 text-center">
            <h3 className="mb-5">Sign in</h3>
            <Formik initialValues={{email : '', password : ''}} onSubmit={loginSubmit}>
                    { ({values,handleSubmit, handleChange}) => (
                      <form onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
              <input
                type="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                className="form-control form-control-lg"
              />
              <label className="form-label" htmlFor="typeEmailX-2">
                Email
              </label>
            </div>
            <div className="form-outline mb-4">
              <input
                type="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                className="form-control form-control-lg"
              />
              <label className="form-label" htmlFor="typePasswordX-2">
                Password
              </label>
            </div>
            {/* Checkbox */}
            <div className="form-check d-flex justify-content-start mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="form1Example3"
              />
              <label className="form-check-label" htmlFor="form1Example3">
                {" "}
                Remember password{" "}
              </label>
            </div>
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Login
            </button>
            <hr className="my-4" />
            <button
              className="btn btn-lg btn-block btn-primary"
              style={{ backgroundColor: "#dd4b39" }}
              type="submit"
            >
              <i className="fab fa-google me-2" /> Sign in with google
            </button>
            <button
              className="btn btn-lg btn-block btn-primary mb-2"
              style={{ backgroundColor: "#3b5998" }}
              type="submit"
            >
              <i className="fab fa-facebook-f me-2" />
              Sign in with facebook
            </button>
            </form>
                    ) }
                </Formik>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Login