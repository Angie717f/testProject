import React from "react";
import {Link} from 'react-router-dom'
import './UserEntry.css'

const UserEntry = () => {
  return (
    <div className="user-entry">
      <Link to='login'>Sign In </Link>
      <div className="signUp-btn">
        <Link to='register'>Sign Up </Link>
      </div>
    </div>
  );
};

export default UserEntry;
