import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>
        <form action="">
          <h5>Email</h5>
          <input type="text" name="" id="" />
          <h5>Password</h5>
          <input type="password" name="" id="" />
          <button>Sign In</button>
        </form>

        <p>
          By signing-in you agree to AMAZON DEMO CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads
        </p>

        <button>Create Your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
