import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import { EntryLogo } from "../logo/Logo";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="register-page">
        <div className="register-block">
          <div>
            <div>
              <Link to="/">
                <EntryLogo />
              </Link>
            </div>
            <div className="registr-title">
              <h2>Create Account</h2>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
      <div className="backtTo">
        <span>Already have an account?</span>
         <Link to="/login">Sign In</Link>
      </div>
    </div>
  );
};

export default Register;
