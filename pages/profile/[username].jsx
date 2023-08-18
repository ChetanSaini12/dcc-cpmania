import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useParams } from 'next/navigation'
import Dashboard from "./dashboard";
import NotFoundAlpha from "../Components/NotFound/notFoundalpha";
import LoadingAnimation from "../Components/LoadingAnimation/LottieLoadingAnimation";


const Profile = () => {
  const router = useRouter();
  const [isvalid, setIsvalid] = useState(false);
  const [username, setUsername] = useState('chetan_saini');
  

  const [user, setUser] = useState({
    username: 'chetan_saini',
    name : "Chetan Saini",
    email : "chetansaini1241@gmail.com",
    profile_pic : "https://ui-avatars.com/api/?name=Chetan Saini&size=128&background=random",
    leetcodeURL : "chetan_saini21",
    atcoderURL : "chetan_saini12",  
    codeforcesURL : "chetan_saini",
    codechefURL : "chetan_saini21",
  });

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    var currentURL = window.location.href;
    var urlSegments = currentURL.split('/');
    var lastSegment = urlSegments.filter(segment => segment !== '' && segment.indexOf('#') !== 0).pop();
    setUsername(lastSegment);
  }, []); 


  useEffect(() => {
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
              setIsvalid(true);
              setUser(data.user); 
            } else {
              setIsvalid(false);
              console.error("Error fetching user data:", response.statusText);
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
          } finally {
            setIsLoading(false); 
          }
        })(); 
      }
    
  }, [isLoading, isvalid]); 

  if(isLoading)
  {
    return <div id="profile">
       <div className="contestBody_loading">
        <div className="lottie" >
          <LoadingAnimation/>
        </div>
      </div>
    </div>
  }

  if(!isvalid)
  {
    return <div id="profile" className="rating_notFound">
      <div className="lottie" >
      <NotFoundAlpha />
      </div>
    </div>
  }

  return (
    <div id="profile">
          <Dashboard user={user} />
    </div>
  );
};

export default Profile;
