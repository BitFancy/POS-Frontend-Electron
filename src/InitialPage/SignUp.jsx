import React, { useState } from "react";
import {
  LoginImage,
  Logo,
  MailIcon,
  GoogleIcon,
  FacebookIcon,
  Users1,
} from "../EntryFile/imagePath";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const SignUp = (props) => {
  const [eye, seteye] = useState(true);

  const onEyeClick = () => {
    seteye(!eye);
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must not exceed 20 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    props.history.push("/signIn");
  };

  return (
    <>
      <div className="main-wrapper">
        <Helmet>
          <title>SignUp - Dream POS</title>
          <meta name="description" content="SignUp page" />
        </Helmet>
        <div className="account-content">
          <div className="login-wrapper">
            <div className="login-content">
              <div className="login-userset">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="login-logo">
                    <img src={Logo} alt="img" />
                  </div>
                  <div className="login-userheading">
                    <h3>Create an Account</h3>
                    <h4>Continue where you left off</h4>
                  </div>
                  <div className="form-login">
                    <label>Full Name</label>
                    <div className="form-addons">
                      <input
                        type="text"
                        {...register("name")}
                        className={` ${errors.name ? "is-invalid" : ""}`}
                        placeholder="Enter your full name"
                      />
                      <img src={Users1} alt="img" />
                      <div className="invalid-feedback">
                        {errors.name?.message}
                      </div>
                    </div>
                  </div>
                  <div className="form-login">
                    <label>Email</label>
                    <div className="form-addons">
                      <input
                        type="text"
                        {...register("email")}
                        className={` ${errors.email ? "is-invalid" : ""}`}
                        placeholder="Enter your email address"
                      />
                      <img src={MailIcon} alt="img" />
                      <div className="invalid-feedback">
                        {errors.email?.message}
                      </div>
                    </div>
                  </div>
                  <div className="form-login">
                    <label>Password</label>
                    <div className="pass-group">
                      <input
                        type={eye ? "password" : "text"}
                        className={` ${errors.password ? "is-invalid" : ""}`}
                        placeholder="Enter your password"
                        {...register("password")}
                        // className="pass-input"
                      />
                      <span
                        onClick={onEyeClick}
                        className={`fas toggle-password ${
                          eye ? "fa-eye-slash" : "fa-eye"
                        } `}
                      />
                      <div className="invalid-feedback">
                        {errors.password?.message}
                      </div>
                    </div>
                  </div>
                  <div className="form-login">
                    <button type="submit" className="btn btn-login">
                      Sign Up
                    </button>
                  </div>
                  <div className="signinform text-center">
                    <h4>
                      Already a user?{" "}
                      <Link to="/signIn" className="hover-a">
                        Sign In
                      </Link>
                    </h4>
                  </div>
                  <div className="form-setlogin">
                    <h4>Or sign up with</h4>
                  </div>
                  <div className="form-sociallink">
                    <ul>
                      <li>
                        <a href="#">
                          <img src={GoogleIcon} className="me-2" alt="google" />
                          Sign Up using Google
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={FacebookIcon}
                            className="me-2"
                            alt="google"
                          />
                          Sign Up using Facebook
                        </a>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
            <div className="login-img">
              <img src={LoginImage} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
