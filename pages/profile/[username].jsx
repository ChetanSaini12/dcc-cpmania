import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Profile = () => {
  const router = useRouter();
  const { username } = router.query;
  const { loggedIn } = useSelector((state) => state.login);

  const [user, setUser] = useState({
    name: "Chetan Saini",
    email: "chetansaini1241@gmail.com",
    profile_pic: "https://ui-avatars.com/api/?name=Chetan Saini&size=128&background=random",
    leetcodeUN: "chetan_saini21",
    atcoderUN: "chetan_saini12",  
    codeforcesUN: "chetan_saini",
    codechefUN: "chetan_saini21",
  });

  const [isLoading, setIsLoading] = useState(false); // Add loading state

  // useEffect(() => {
  //   if (!loggedIn) {
  //     router.push("/login");
  //   } else {
  //     console.log({ username });
  //     if (username !== undefined) {
  //       (async () => {
  //         try {
  //           const response = await fetch(
  //             `http://localhost:7000/profile/${username}`,
  //             {
  //               method: "GET",
  //               headers: {
  //                 "Content-Type": "application/json",
  //               },
  //             }
  //           );
  
  //           if (response.ok) {
  //             const data = await response.json();
  //             console.log(data);
  //             setUser(data);
  //           } else {
  //             console.error("Error fetching user data:", response.statusText);
  //           }
  //         } catch (error) {
  //           console.error("Error fetching user data:", error);
  //         } finally {
  //           setIsLoading(false); // Set loading state to false after API call
  //         }
  //       })();
  //     } 
  //   }
  // }, [loggedIn, setUser ]);

  return (
    <>
      {isLoading ? ( // Render loading state while waiting for data
        <h1>Loading...</h1>
      ) : (
        username !== undefined && (
          <div id="dashboard">
            <h1>{username}</h1>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            <img src={user.profile_pic} alt="profile pic" />
            <h2>{user.leetcodeUN}</h2>
            <h2>{user.atcoderUN}</h2>
            <h2>{user.codeforcesUN}</h2>
            <h2>{user.codechefUN}</h2>
          </div>
        )
      )}
    </>
  );
};

export default Profile;
