import React, { useState, useEffect }from 'react'
import { useRouter} from 'next/router'
import { useSelector } from 'react-redux'


const Profile = () => {
    const router = useRouter()
    const { username } = router.query
    const {loggedIn} = useSelector(state => state.login)

    const [user, setUser] = useState({
        name: "",
        email: "",
        profile_pic: "",    
        leetcodeURL: "",
        atcoderURL: "",
        codeforcesURL: "",
        codechefURL: ""
    });

    useEffect(() => {
        if (!loggedIn) {
          router.push('/login');
        } else {
          (async () => {
            try {
              const response = await fetch(`http://localhost:7000/profile/${username}`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              });
      
              if (response.ok) {
                const data = await response.json();
                // Handle the data here
              } else {
                console.error('Error fetching user data:', response.statusText);
              }
            } catch (error) {
              console.error('Error fetching user data:', error);
            }
          })();
        }
      }, []);
      


    return (
        <div id = 'blog'>
            <h1>{username}</h1>
        </div>
    )
}

export default Profile
