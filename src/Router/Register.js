import React from "react";
import _ from "lodash/fp";
import { useForm } from "react-hook-form";

import "./styles.css";

function Register() {
  const { register, handleSubmit, watch, errors } = useForm();
  var onSubmit = (data) => {
    alert(data);
  };
  return (
    <div>
      <h1>REGISTER FORM</h1>
      <hr style={{ color: "white", width: "400px", marginLeft: "475px" }}></hr>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            width: "500px",
            border: "1px solid whitesmoke",
            marginLeft: "-100px",
          }}
        >
          <label>Name</label>
          <input
            name="firstName"
            ref={register({
              required: true,
              maxLength: 50,
              pattern: /^[A-Za-z ]+$/i,
            })}
          />
          {_.get("firstName.type", errors) === "required" && (
            <p>This field is required</p>
          )}
          {_.get("firstName.type", errors) === "maxLength" && (
            <p>First name cannot exceed 50 characters</p>
          )}
          {_.get("firstName.type", errors) === "pattern" && (
            <p>Alphabetical characters only</p>
          )}
          <label>Email ID</label>
          <input
            name="email"
            ref={register({
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
            })}
          />
          {_.get("email.type", errors) === "pattern" && <p>Invalid Email ID</p>}
          <label>Password</label>
          <input
            name="password"
            type="password"
            ref={register({ pattern: /^[A-Za-z0-9`!@#$%^&*]+$/i })}
          />
          {_.get("password.type", errors) === "pattern"}
          <label>Confirm Password</label>
          <input
            name="retype"
            type="password"
            ref={register({ pattern: /^[A-Za-z0-9`!@#$%^&*]+$/i })}
          />
          {_.get("retype.type", errors) === "pattern"}
          {watch("password") !== watch("retype") && (
            <p>Enter the Confirm Password</p>
          )}
          <button type="Register">REGISTER</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
