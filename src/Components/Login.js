import React from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <div>
      <section className={`${classes.container} ${classes.forms}`}>
        <div className={`${classes.form} ${classes.login}`}>
          <div className={`${classes['form-content']}`}>
            <header>Login</header>
            <form action="#">
              <div className={`${classes.field} ${classes['input-field']}`}>
                <input type="email" placeholder="Email" className={classes.input} />
              </div>

              <div className={`${classes.field} ${classes['input-field']}`}>
                <input
                  type="password"
                  placeholder="Password"
                  className={classes.password}
                />
                <AiOutlineEyeInvisible className={`${classes['eye-icon']}`} />
              </div>

              <div className={`${classes['form-link']}`}>
                <a href="#" className={`${classes['forgot-pass']}`}>
                  Forgot password?
                </a>
              </div>

              <div className={`${classes.field} ${classes['button-field']}`}>
                <button>Login</button>
              </div>
            </form>

            <div className={`${classes['form-link']}`}>
              <span>
                Don't have an account? &nbsp;
                <a href="#" className={`${classes.link} ${classes['signup-link']}`}>
                  Signup
                </a>
              </span>
            </div>
          </div>

          <div className={classes.line}></div>

          <div className={`${classes['media-options']}`}>
            <a href="#" className={`${classes.link} ${classes.facebook}`}>
              <BsFacebook />&nbsp;<span>Login with Facebook</span>
            </a>
          </div>

          <div className={`${classes['media-options']}`}>
            <a href="#" className={`${classes.link} ${classes.google}`}>
              <BsGoogle className={`${classes['google-img']}`} /> &nbsp;<span>Login with Google</span>
            </a>
          </div>
        </div>

        <div className={`${classes.form} ${classes.signup}`}>
          <div className={`${classes['form-content']}`}>
            <header>Signup</header>
            <form action="#">
              <div className={`${classes.field} ${classes['input-field']}`}>
                <input type="email" placeholder="Email" className={classes.input} />
              </div>

              <div className={`${classes.field} ${classes['input-field']}`}>
                <input
                  type="password"
                  placeholder="Create password"
                  className={classes.password}
                />
              </div>

              <div className={`${classes.field} ${classes['input-field']}`}>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className={classes.password}
                />
                <AiOutlineEyeInvisible className={`${classes['eye-icon']}`} />
              </div>

              <div className={`${classes.field} ${classes['button-field']}`}>
                <button>Signup</button>
              </div>
            </form>

            <div className={`${classes['form-link']}`}>
              <span>
                Already have an account?
                <a href="#" className={`${classes.link} ${classes['login-link']}`}>
                  Login
                </a>
              </span>
            </div>
          </div>

          <div className={classes.line}></div>

          <div className={`${classes['media-options']}`}>
            <a href="#" className={`${classes.link} ${classes.facebook}`}>
              <BsFacebook />&nbsp;<span>Login with Facebook</span>
            </a>
          </div>

          <div className={`${classes['media-options']}`}>
            <a href="#" className={`${classes.link} ${classes.google}`}>
              <BsGoogle className={`${classes['google-img']}`} /> &nbsp;<span>Login with Google</span>
            </a>
          </div>
        </div>
      </section >
    </div >
  );
};

export default Login;
