import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Dashboard from "./dashboard";
import NotFoundAlpha from "../Components/NotFound/notFoundalpha";
import LoadingAnimation from "../Components/LoadingAnimation/LottieLoadingAnimation";
import { Base_Url } from "@/utils/Constants";
import axios from "axios";

const Profile = () => {
  const [isvalid, setIsvalid] = useState(false);
  
  const [user, setUser] = useState({});
  
  const [isLoading, setIsLoading] = useState(false);
  const fetchData=async(username)=>{
    setIsLoading(true);
    await axios.get( `${Base_Url}/profile/${username}`).then((res)=>{
      const {data}=res
      if(data.success==true){
        setIsvalid(true);
        setUser(data.user);
      }
      else{
        setIsvalid(false);
      }
      setIsLoading(false);
    }).catch((err)=>{
      setIsLoading(false);
      console.error("Error fetching user data:", err);
    })
  }
  useEffect(() => {
    var currentURL = window.location.href;
    var urlSegments = currentURL.split("/");
    var lastSegment = urlSegments
      .filter((segment) => segment !== "" && segment.indexOf("#") !== 0)
      .pop();
      fetchData(lastSegment);
  }, []);


  if (isLoading) {
    return (
      <div id="profile">
        <div className="contestBody_loading">
          <div className="lottie">
            <LoadingAnimation />
          </div>
        </div>
      </div>
    );
  }

  if (!isvalid) {
    return (
      <div id="profile" className="rating_notFound">
        <div className="lottie">
          <NotFoundAlpha />
        </div>
      </div>
    );
  }

  return (
    <div id="profile">
      <Dashboard user={user} />
    </div>
  );
};

export default Profile;
