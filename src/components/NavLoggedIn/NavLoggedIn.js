import { GiGraduateCap } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import { Link as LinkR } from 'react-router-dom';
import React from 'react'
import './NavLoggedIn.css'

const NavLoggedIn = () => {
    return (
        <>
            <div className='nav-container'>
                <h1><GiGraduateCap style={{color:'#007bed'}}/>  teachme<span>tech</span></h1>
                <div className='nav-flex-item'>
                    <LinkR to='/' id='logout'>Log Out</LinkR>
                    <div id='tutor-button'>
                        <a className='blue-button' href='https://us04web.zoom.us/j/77960815886?pwd=d3lGRG9LU3FVZXpSakZScE0yekxhdz09' target="_blank">Connect with a tutor</a>
                        <BsArrowRight style={{height:'1.5em', width:'1.5em'}}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavLoggedIn
