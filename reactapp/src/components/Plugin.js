import { Formik } from 'formik';
import React from 'react'
import "./plug.in.css"
const Plugin = ({owner}) => {

  const subscriberSubmit = async (formdata) => {
    console.log(formdata);
    // 1. Url
    // 2. Method
    // 3. Data
    // 4. Data Format

    // to send request on backend - to connect frontend and backend.
    const response = await fetch('http://localhost:5000/subscriber/add', {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200) {
      console.log('user added');

    }
  }
  return (
    <div>

      <section className="vh-100 col-md-6 mx-auto d-flex align-items-center" >
        <div className="my-card  mb-3 w-100">
        <div className="card-body">
                <h4 className="card-title">Subscribe to our Newsletter!</h4>
                {/* <p className="card-text">
          We send newsletter once a week every friday
          </p> */}
                <p className="card-text">
                  <Formik initialValues={{ name: '', email: '', owner: owner, createdAt: new Date() }} onSubmit={subscriberSubmit}>
                    {({ values, handleSubmit, handleChange }) => (
                      <form onSubmit={handleSubmit}>
                        {/* Name input */}
                        <div className="form-outline mb-4">
                          
                          <input
                            type="name"
                            id="name"
                            value={values.name}
                            onChange={handleChange}
                            className="form-control"
                          />
                           <label className="form-label" htmlFor="form5Example1">
                            Name
                          </label>
                        </div>
                        {/* Email input */}
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form5Example2">
                            Email address
                          </label>
                        </div>
                        {/* Checkbox */}
                        <div className="form-check d-flex justify-content-center mb-4">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue=""
                            id="form5Example3"
                            defaultChecked=""
                          />
                          <label className="form-check-label" htmlFor="form5Example3">
                            I have read and agree to the terms
                          </label>
                        </div>
                        {/* Submit button */}
                        <button type="submit" className="btn btn-primary btn-block mb-4">
                          Subscribe
                        </button>

                      </form>
                    )}
                  </Formik>
                </p>
              </div>
        </div>


      </section>

    </div>

  )
}

export default Plugin