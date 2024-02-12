import React from 'react'
import { LoginImage, Logo, MailIcon, } from '../EntryFile/imagePath'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'



const ForgotPassword = () => {

    return (
        <>
            <div className="main-wrapper">
                <Helmet>
                    <title>Forgot Password - Dream POS</title>
                    <meta name="description" content="ForgetPassword page" />
                </Helmet>
                <div className="account-content">
                    <div className="login-wrapper">
                        <div className="login-content">
                            <div className="login-userset ">
                                <div className="login-logo">
                                    <img src={Logo} alt="img" />
                                </div>
                                <div className="login-userheading">
                                    <h3>Forgot password?</h3>
                                    <h4>
                                        Don’t warry! You can change your password by your security question.
                                    </h4>
                                </div>
                                <div className="form-login">
                                    <label>Security Question</label>
                                    <div className="form-addons">
                                        <input
                                            type="text"
                                            placeholder="What is your child nick name?"
                                        />
                                        <img src={MailIcon} alt="img" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="form-login col-6">
                                        <button type='submit' className="btn btn-login">
                                            Submit
                                        </button>
                                    </div>
                                    <div className="form-login col-6">
                                        <Link to='/signin' className="btn btn-login">
                                            Back
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="login-img">
                            <img src={LoginImage} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword;