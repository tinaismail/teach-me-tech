import React from 'react'
import NavLoggedIn from '../components/NavLoggedIn/NavLoggedIn'
import Videos from '../components/VideosComponent/Videos'

const loggedInPage = () => {
    return (
        <>
          <NavLoggedIn/>
          <Videos />
        </>
    )
}

export default loggedInPage