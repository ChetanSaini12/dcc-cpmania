import React from "react";
import PropTypes from "prop-types";
import { SiCodeforces, SiCodechef, SiLeetcode, SiCodeproject } from "react-icons/si";
import UserHandles from "./userHandles";

const Dashboard = ({ user }) => {
  return (
    <div id="dashboard">
      <div className="userInfo">
        <div className="userAvatar">
          <img src={user?.profile_pic} alt="user avatar" />
        </div>
        <div className="userName">{user?.username}</div>
        <div className="name">{user?.name}</div>
        <div className="urls">
          <div>
            <SiCodeforces className="inline" />
            {user?.codeforcesURL ? (
              <a className="url" href={`https://codeforces.com/profile/${user.codeforcesURL}`} target="_blank">
                {user.codeforcesURL}
              </a>
            ) : (
              <span className="url">Not Available</span>
            )}
          </div>
          <div>
            <SiCodechef className="inline" />
            {user?.codechefURL ? (
              <a className="url" href={`https://www.codechef.com/users/${user.codechefURL}`} target="_blank">
                {user.codechefURL}
              </a>
            ) : (
              <span className="url">Not Available</span>
            )}
          </div>
          <div>
            <SiLeetcode className="inline" />
            {user?.leetcodeURL ? (
              <a className="url" href={`https://leetcode.com/${user.leetcodeURL}`} target="_blank">
                {user.leetcodeURL}
              </a>
            ) : (
              <span className="url">Not Available</span>
            )}
          </div>
          <div>
            <SiCodeproject className="inline" />
            {user?.atcoderURL ? (
              <a className="url" href={`https://atcoder.jp/users/${user.atcoderURL}`} target="_blank">
                {user.atcoderURL}
              </a>
            ) : (
              <span className="url">Not Available</span>
            )}
          </div>
        </div>
      </div>
      <div className="userHandles">
        <UserHandles user={user} />
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  user: PropTypes.shape({
    profile_pic: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    codeforcesURL: PropTypes.string,
    codechefURL: PropTypes.string,
    leetcodeURL: PropTypes.string,
    atcoderURL: PropTypes.string,
  }),
};

export default Dashboard;