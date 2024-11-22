import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import "./Register.css";

const Login = () => {
  // Function to handle form submission
  const loginSubmit = async (formdata, { resetForm }) => {
    console.log(formdata); // Log form data for debugging
    resetForm();

    try {
      const response = await fetch("http://localhost:5000/user/authenticate", {
        method: "POST",
        body: JSON.stringify(formdata),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Logged in successfully!",
        });

        const data = await response.json();
        sessionStorage.setItem("user", JSON.stringify(data));
      } else if (response.status === 401) {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid credentials. Please try again.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Unknown Error",
          text: "Something went wrong. Please try later.",
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Unable to connect to the server.",
      });
    }
  };

  return (
    <div>
      <section
        className="vh-100 bg-image"
        style={{
          backgroundImage:
            'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")',
        }}
      >
        <div className="container py-3 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong gradient-custom-3"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="text-uppercase text-center mb-4">Sign in</h3>
                  <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={loginSubmit}
                  >
                    {({ values, handleSubmit, handleChange }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            className="form-control form-control-lg"
                            required
                          />
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                        </div>
                        <div className="form-outline mb-2">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            className="form-control form-control-lg"
                            required
                          />
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                        </div>
                        {/* Checkbox */}
                        <div className="form-check d-flex justify-content-start mb-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rememberPassword"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberPassword"
                          >
                            Remember password
                          </label>
                        </div>
                        <button
                          className="btn btn-primary btn-lg btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                        <hr className="my-4" />
                        <button
                          className="btn btn-lg btn-block btn-primary"
                          style={{ backgroundColor: "#dd4b39" }}
                          type="button"
                        >
                          <i className="fab fa-google me-2" /> Sign in with
                          Google
                        </button>
                        <button
                          className="btn btn-lg btn-block btn-primary mb-2"
                          style={{ backgroundColor: "#3b5998" }}
                          type="button"
                        >
                          <i className="fab fa-facebook-f me-2" />
                          Sign in with Facebook
                        </button>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
