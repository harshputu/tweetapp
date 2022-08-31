import React from 'react';

export default function Forget() {
  return (
    <section className="auth-container">
      <h2 className="text-center p-1 color-text-primary">Forget Password</h2>
      <form>
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
            New Password<span className="color-text-error">*</span>{' '}
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            name="newPassword"
            required
          />
        </div>
        <div className="input-text-group pb-1">
          <label className="pb-05">
            Confirm Password<span className="color-text-error">*</span>{' '}
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            name="cnfPassword"
            required
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className="btn btn-primary btn-full-width" type="submit">
            Change Password
          </button>
        </div>
      </form>
    </section>
  );
}
