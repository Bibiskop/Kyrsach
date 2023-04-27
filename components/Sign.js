
import navBtnImg from './img/img--header/free-icon-globe-558593.png.svg';
import React from 'react';
import {useNavigate} from "react-router-dom"

const Sign = () => {
    const navigate = useNavigate();

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    
    signUpButton.addEventListener('click', () =>
    container.classList.add('right-panel-active'));
    
    signInButton.addEventListener('click', () =>
    container.classList.remove('right-panel-active'));

    return (
        <div>
            <div className="header--logoNav">
              <div className="logo---block"><button onClick={()=>navigate(-1)} className="logo">AviaSea</button></div>
              <div className="navigation">
                  <div className="navigation--btn"><button onClick={()=>navigate("/components/Sign")} className="navBtn">Sign in</button></div>
                  <div className="navigation--btn"><button onClick={()=>navigate("/components/Sign")} className="navBtn">Sign up</button></div>
                  <div className="navigation--btn"><img src={navBtnImg} alt="#" /></div>
              </div>
          </div>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <button className="social btn--a"><i className="fab fa-facebook-f"></i></button>
                            <button className="social btn--a"><i className="fab fa-google-plus-g"></i></button>
                            <button className="social btn--a"><i className="fab fa-linkedin-in"></i></button>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <button className="social btn--a"><i className="fab fa-facebook-f"></i></button>
                            <button className="social btn--a"><i className="fab fa-google-plus-g"></i></button>
                            <button className="social btn--a"><i className="fab fa-linkedin-in"></i></button>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button className='btn--a'>Forgot your password?</button>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div claclassNamess="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
    
    
    export default Sign;