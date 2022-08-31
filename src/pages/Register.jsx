import React from 'react'

export default function Register() {
  return (
<section className="auth-container">
        <div className="auth-wrapper">
          <h2 className="text-center p-1 color-text-primary">Signup</h2>
          <form >
            <div className="auth-form-container">
              <div className="input-text-group pb-1">
                <label className="pb-05">
                  First name<span className="color-text-error">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your First name"
                  name="LastName"
                  
                 
                  required
                />
              </div>
              <div className="input-text-group pb-1">
                <label className="pb-05">
                  Last name<span className="color-text-error">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Last name"
                  name="LastName"
                  
                 
                  required
                />
              </div>
              <div className="input-text-group pb-1">
                <label className="pb-05">
                  Email address<span className="color-text-error">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                 
                  required
                />
              </div>
              <div className="input-text-group pb-1">
                <label className="pb-05">
                  Login ID<span className="color-text-error">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Login ID"
                  name="LoginId"
                  
                 
                  required
                />
              </div>
              <div className="input-text-group pb-1">
                <label className="pb-05">
                  Password<span className="color-text-error">*</span>{" "}
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                 
                  required
                />
              </div>
              <div className="input-text-group mb-2">
                <label className="pb-05">
                  Confirm password<span className="color-text-error">*</span>{" "}
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  name="cnfpassword"
                  
                  required
                />
              </div>
              <div className="input-text-group mb-2">
                <label className="pb-05">
                  Contact Number <span className="color-text-error">*</span>{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Contact Number"
                  name="contactNumber"
                  maxLength={10}
                  
                  required
                />
              </div>
              <button className="btn btn-primary btn-full-width " style={{width:"20%",textAlign:"center"}} type="submit">
                Create new account
              </button>
              <div className="text-center p-1 anchor-text">
              
              </div>
            </div>
          </form>
        </div>
      </section>
  )
}
