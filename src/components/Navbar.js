import React from 'react';
import { GiGraduateCap } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <h1><GiGraduateCap style={{color:'#007bed'}}/>  teachme<span>tech</span></h1>
            <div className='nav-flex-item'>
                <p>Log In</p>
                <div id='join-button'>
                    <p>Join for free</p>
                    <BsArrowRight style={{height:'1.5em', width:'1.5em'}}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
