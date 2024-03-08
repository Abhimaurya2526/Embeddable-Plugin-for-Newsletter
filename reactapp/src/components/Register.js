import { Formik } from 'formik';
import React from 'react'
import "./Register.css"

const Register = () => {
    
    const userSubmit = async (formdata) => {
        console.log(formdata);
        // 1. Url
        // 2. Method
        // 3. Data
        // 4. Data Format

       // to send request on backend - to connect frontend and backend.
        const response = await fetch('http://localhost:5000/user/add', {
            method : 'POST',
            body : JSON.stringify(formdata),
            headers : {
                'Content-Type' : 'application/json'
            }
        });

        if(response.status === 200){
            console.log('user added');
            
        }
    }
  return (
    <div>
  <section
  className="vh-100 bg-image"
  style={{
    backgroundImage:
      'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'
  }}
>
  <div className="mask d-flex align-items-center   ">
    <div className="container  h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card gradient-custom-3" style={{ borderRadius: "1rem"}}>
            <div className="card-body ">
              <h2 className="text-uppercase text-center mb-4">
                Create an account
              </h2>
                 
              <Formik initialValues={{ name : '',email : '', password : '',repassword : ''}} onSubmit={userSubmit}>
                    { ({ values, handleSubmit, handleChange }) => (
              <form onSubmit={handleSubmit} >
                <div className="form-outline mb-4">
                  <input
                    type="name"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    className="form-control form-control-lg "
                    style={{backgroundColor: '#e4f2f1'}}
                  />
                  <label className="form-label" htmlFor="form3Example1cg">
                    Your Name
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    
                  />
                  <label className="form-label" htmlFor="form3Example3cg">
                    Your Email
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
                  <label className="form-label" htmlFor="form3Example4cg">
                    Password
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="repassword"
                    id="repassword"
                    value={values.repassword}
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    style={{backgroundColor: '#e4f2f1'}}

                  />
                  <label className="form-label" htmlFor="form3Example4cdg">
                    Repeat your password
                  </label>
                </div>
                <div className="form-check d-flex justify-content-center mb-2">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    defaultValue=""
                    id="form2Example3cg"
                  />
                  <label className="form-check-label" htmlFor="form2Example3g">
                    I agree all statements in{" "}
                    <a href="#!" className="text-body">
                      <u>Terms of service</u>
                    </a>
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                  >
                    Register
                  </button>
                </div>
                <p className="text-center text-muted mt-2 mb-0">
                  Have already an account?{" "}
                  <a href="/Login" className="fw-bold text-body">
                    <u>Login here</u>
                  </a>
                </p>
              </form>
                   ) }
             </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Register