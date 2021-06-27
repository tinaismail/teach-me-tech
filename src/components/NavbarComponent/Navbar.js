import { GiGraduateCap } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import React, { useState } from 'react';
import { Link as LinkR } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    const [register, setRegister] = useState(false);
	const handleRegister = () => setRegister(!register);
    const closeRegister = () => setRegister(false);

    const [login, setLogin] = useState(false);
	const handleLogin = () => setLogin(!login);
    const closeLogin = () => setLogin(false);

    return (
        <>
            <div className='nav-container'>
                <h1><GiGraduateCap style={{color:'#007bed'}}/>  teachme<span>tech</span></h1>
                <div className='nav-flex-item'>
                    <p onClick={handleLogin}>Log In</p>
                    <div id='join-button' onClick={handleRegister}>
                        <p className='blue-button'>Join for free</p>
                        <BsArrowRight style={{height:'1.5em', width:'1.5em'}}/>
                    </div>
                </div>
            </div>
            { register && 
            <div className='register-container'>
                <div className='form-header'>
                    <h3>Register for TeachMeTech</h3>
                    <AiFillCloseCircle style={{cursor:'pointer'}} onClick={closeRegister}/>
                </div>
                <form action='/register' method='post'>
                    <div className='form-item'>
                        <label>Username: </label>
                        <input type='text' name='username' required></input>
                    </div>
                    <div className='form-item'>
                        <label>Password: </label>
                        <input type='password' name='password' required></input>
                    </div>
                    <div className='form-item'>
                        <LinkR to='/loggedin' className='button'>Register</LinkR>
                    </div>
                    <div className='form-item'>
                        <LinkR to='/volunteer' id='volunteer-link'>Want to volunteer as a tutor?</LinkR>
                    </div>
                </form>
            </div> 
            }
            { login && 
            <div className='login-container'>
                <div className='form-header'>
                    <h3>Welcome back</h3>
                    <AiFillCloseCircle style={{cursor:'pointer'}} onClick={closeLogin}/>
                </div>
                <form action='/login' method='post'>
                    <div className='form-item'>
                        <label>Username: </label>
                        <input type='text' name='username' required></input>
                    </div>
                    <div className='form-item'>
                        <label>Password: </label>
                        <input type='password' name='password' required></input>
                    </div>
                    <div className='form-item'>
                        <LinkR to='/loggedin' className='button'>Log in</LinkR>
                    </div>
                </form>
            </div> 
            }
        </>
    )
}

export default Navbar
