import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
// import { Image } from 'next/image'

const Profile = () => {

  const {loggedIn,userName} = useSelector(state => state.login);
  const router = useRouter();

  useEffect(() => {
    if (!loggedIn) {
      router.push("/login");
    }
    else {
      router.push("/profile/"+userName);
    }
  }, [loggedIn, userName]); 
}

export default Profile
