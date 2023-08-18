import React from "react";
import Link from "next/link";
import {
  SiCodeforces,
  SiCodechef,
  SiLeetcode,
  SiCodeproject,
} from "react-icons/si";
import span from "next/link";
import UserHandles from "./userHandles";

const Dashboard = (props) => {
  return (
    <div id="dashboard">
      <div className="userInfo">
        <div className="userAvatar">
          <img src={props.user.profile_pic} alt="user avatar" />
        </div>
        <div className="userName" >{props.user.username}</div>
        <div className="name">{props.user.name}</div>
        <div className="urls">
        <div>
            <SiCodeforces className="inline" />
            {
                props.user.codeforcesURL === "" ?
                    <span className="url">Not Available</span>
            :
                <a className="url" href = {"https://codeforces.com/profile/" + props.user.codeforcesURL} target = "_blank" > {props.user.codeforcesURL} </a>
            }
          </div>
          <div>
            <SiCodechef className="inline" />
            {
                props.user.codechefURL === "" ?
                    <span className="url">Not Available</span>
            :
                <a className="url" href = {"https://www.codechef.com/users/" + props.user.codechefURL} target = "_blank" > {props.user.codechefURL} </a>
            }
          </div>
          <div>
            <SiLeetcode className="inline" />
            {
                props.user.leetcodeURL === "" ?
                    <span className="url">Not Available</span>
            :
                <a className="url" href = {"https://leetcode.com/" + props.user.leetcodeURL} target = "_blank" > {props.user.leetcodeURL} </a>
            }
          </div>
          <div>
            <SiCodeproject className="inline" />
            {
                props.user.atcoderURL === "" ?
                    <span className="url">Not Available</span>
            :
                <a className="url" href = {"https://atcoder.jp/users/" + props.user.atcoderURL} target = "_blank" >{props.user.atcoderURL}</a>
            }
          </div>
        </div>
      </div>
      <div className="userHandles">
        <UserHandles user={props.user} />
      </div>
    </div>
  );
};

export default Dashboard;
