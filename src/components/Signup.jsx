import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and submit logic goes here
  };

  return (
    <div>
      <div className="modal-content">
        <div className="modal-content-dialog p-4 modal-content-dialog-centered">
          <div className="modal-content-content">
            <div className="border-0 modal-header">
              <h5 className="fs-3 fw-bold modal-title" id="userModalLabel">
                Sign Up
              </h5>
              <button type="button" className="btn-close" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="needs-validation" onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label className="form-label" htmlFor="fullName">Name</label>
                  <input
                    placeholder="Enter Your Name"
                    required
                    id="fullName"
                    className="form-control"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">Please enter your name.</div>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">Email address</label>
                  <input
                    placeholder="Enter Email address"
                    required
                    id="email"
                    className="form-control"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">Please enter a valid email.</div>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="password">Password</label>
                  <input
                    placeholder="Enter Password"
                    required
                    id="password"
                    className="form-control"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">Please enter a password.</div>
                  <small className="form-text">
                    By signing up, you agree to our{' '}
                    <a href="#!">Terms of Service</a> &amp; <a href="#!">Privacy Policy</a>.
                  </small>
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
              </form>
            </div>
            <div className="border-0 justify-content-center modal-footer">
              Already have an account? <a href="/signin">Sign in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
