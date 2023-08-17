import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useParams } from 'next/navigation'
import Dashboard from "./dashboard";


const Profile = () => {
  const router = useRouter();
  const [username, setUsername] = useState('chetan_saini');
  const { loggedIn } = useSelector((state) => state.login);

  const [user, setUser] = useState({
    username: 'chetan_saini',
    name : "Chetan Saini",
    email : "chetansaini1241@gmail.com",
    profile_pic : "https://ui-avatars.com/api/?name=Chetan Saini&size=128&background=random",
    leetcodeURL : "chetan_saini21",
    atcoderURL : "chetan_saini12",  
    codeforcesURL : "cheatn_saini",
    codechefURL : "chetan_saini21",
  });

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    var currentURL = window.location.href;
    var urlSegments = currentURL.split('/');
    var lastSegment = urlSegments.filter(segment => segment !== '' && segment.indexOf('#') !== 0).pop();
    setUsername(lastSegment);
  }, []); 


  useEffect(() => {
    if (!loggedIn) {
      router.push("/login");
    } else {
      if (username !== undefined) {
        (async () => {
          try {
            const response = await fetch(
              `http://localhost:7000/profile/${username}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            if (response.ok) {
              const data = await response.json()
              setUser(data.user); 
            } else {
              console.error("Error fetching user data:", response.statusText);
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
          } finally {
            setIsLoading(false); 
          }
        })();
      }
    }
  }, [username]); 

  return (
    <div id="profile">
      {isLoading ? ( 
        <h1>Loading...</h1>
      ) : (
        username !== undefined && (
          <Dashboard user={user} />
        )
      )}
    </div>
  );
};

export default Profile;
