import React from 'react'
import './VolunteerForm.css'

const VolunteerForm = () => {
    return (
        <div className='form-container'>
                <form action='/volunteerRegister' method='post'>
                    <label>Full name: </label>
                    <input type='text' name='name' required></input>
                    <label>Email: </label>
                    <input type='email' name='email' required></input>
                    <label>Resume: </label>
                    <input type='file' name='resume' required id='resume' style={{textAlign:'center', alignItems:"center"}}></input>
                    <label>Additional Comments: </label>
                    <textarea name='comments' required></textarea>
                    <input type='submit' id='submit'></input>
                </form> 
            </div>
    )
}

export default VolunteerForm
