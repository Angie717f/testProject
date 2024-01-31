import React from 'react'
import { EntryLogo } from '../logo/Logo';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import './Login.css'

const Login = () => {
    return (
      <div className="login">
        <div className="login-page">
          <div className="login-block">
            <div>
              <div>
                <Link to="/">
                  <EntryLogo />
                </Link>
              </div>
              <div className="login-title">
                <h2>Sign In</h2>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
        <div className="backtTo">
          <span>Don't have an account yet?</span>
           <Link to="/register">Create Account</Link>
        </div>
      </div>
    );
}

export default Login