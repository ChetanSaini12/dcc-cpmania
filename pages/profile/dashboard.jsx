import React from "react";
import Link from "next/link";
import {
  SiCodeforces,
  SiCodechef,
  SiLeetcode,
  SiCodeproject,
} from "react-icons/si";
import UserHandles from "./userHandles";

const Dashboard = ({user}) => {
  return (
    <div id="dashboard">
      <div className="userInfo">
        <div className="userAvatar">
          <img src={user.profile_pic} alt="user avatar" />
        </div>
        <div className="userName" >{user.username}</div>
        <div className="name">{user.name}</div>
        <div className="urls">
        <div>
            <SiCodeforces className="inline" />
            {
                user.codeforcesURL === "" ?
                    <span className="url">Not Available</span>
            :
                <a className="url" href = {"https://codeforces.com/profile/" + user.codeforcesURL} target = "_blank" > {user.codeforcesURL} </a>
            }
          </div>
          <div>
            <SiCodechef className="inline" />
            {
                user.codechefURL === "" ?
                    <span className="url">Not Available</span>
            :
                <a className="url" href = {"https://www.codechef.com/users/" + user.codechefURL} target = "_blank" > {user.codechefURL} </a>
            }
          </div>
          <div>
            <SiLeetcode className="inline" />
            {
                user.leetcodeURL === "" ?
                    <span className="url">Not Available</span>
            :
                <a className="url" href = {"https://leetcode.com/" + user.leetcodeURL} target = "_blank" > {user.leetcodeURL} </a>
            }
          </div>
          <div>
            <SiCodeproject className="inline" />
            {
                user.atcoderURL === "" ?
                    <span className="url">Not Available</span>
            :
                <a className="url" href = {"https://atcoder.jp/users/" + user.atcoderURL} target = "_blank" >{user.atcoderURL}</a>
            }
          </div>
        </div>
      </div>
      <div className="userHandles">
        <UserHandles user={user} />
      </div>
    </div>
  );
};

export default Dashboard;
