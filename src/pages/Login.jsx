import React from 'react'

export default function Login() {
  return (
    <section className="auth-container">
        <div className="auth-wrapper">
          <h2 className="text-center p-1 color-text-primary">Login</h2>
          <form >
            
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
              
              <button className="btn btn-primary btn-full-width" style={{width:"20%",textAlign:"center"}} type="submit">
                Login
              </button>
              <div className="text-center p-1 anchor-text">
              
              </div>
           
          </form>
        </div>
      </section>
  )
}
