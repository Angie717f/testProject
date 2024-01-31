import React from "react";
import NotRobot from '../../asset/images/imNotRobot.png'
import {BiLogoFacebook} from 'react-icons/bi' 
import {FcGoogle} from 'react-icons/fc'

const LoginForm = () => {
    return (
      <div className="user_entry-form">
        <form>
          <div className="form-phone">
            <span>Phone Number</span>
             <input type="phone" name="phone" placeholder="55 12 34 56" />        
          </div>
          <div className="form-password">
            <span>Password</span>
            <input type="password" name="passwrod" placeholder="Enter your password" />
          </div>
          <div className="form_create-account">
            <button>Create Account</button>
          </div>
        </form>
        <div className="continue">
          <div></div>
            <p>Continue with</p>
          <div></div>
          </div>
          <div className="facebook">
            <BiLogoFacebook/> 
            <a href="#"> Facebook</a>
          </div>
          <div className="google">
             <FcGoogle/> 
            <a href="#">Google</a>
          </div>
          <div className="form_checkboxBySignUp">
            <input type="checkbox" name="chekboxBySignUp" />
            <span>
              By clicking to 'Sign Up' button you accept our
              <a href="#">Terms & Conditions</a>
            </span>
          </div>
          <div className="form_checkboxByRobot">
            <label >
            <input type="checkbox" name="checkboxByRobot" />
                I'm not robot
            </label>
            <div className="robot"> <img src={NotRobot} alt="" /></div>
          </div>
      </div>
    );
}

export default LoginForm