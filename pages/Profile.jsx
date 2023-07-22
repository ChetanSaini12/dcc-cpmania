import React from 'react'
import { useSelector } from 'react-redux'
// import { Image } from 'next/image'


const Profile = () => {

  const {loggedIn,userName, profile_pic, cc_userName, cf_userName, lc_userName, ac_userName } = useSelector(state => state.login);


  return (
    <div id='profile'>
      <img src={profile_pic} />
      <h1>{userName}</h1>
      <h1>{cc_userName}</h1>
      <h1>{cf_userName}</h1>
      <h1>{lc_userName}</h1>
      <h1>{ac_userName}</h1>
    </div>
  )
}

export default Profile
