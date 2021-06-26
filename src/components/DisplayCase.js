import React from 'react';
import './DisplayCase.css'
import DisplayImg from '../img/displaycase.svg';
import DisplayImg2 from '../img/tutordisplay.svg'

const DisplayCase = () => {
    return (
        <>
            <div id="display-container">
                <p>Receive free tutoring in technology.</p>
                <div className='img-container'>
                    <img src={DisplayImg}/>
                    <img src={DisplayImg2}/>    
                </div>
            </div>
        </>
    )
}

export default DisplayCase
