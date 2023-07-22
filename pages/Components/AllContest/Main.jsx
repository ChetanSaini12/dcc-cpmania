import React, { useState } from "react";
import ContestBody from "./ContestBody";
import { SiCodeforces } from "react-icons/si";

const Main = () => {
  const [activeTab, setActiveTab] = useState("Fastforces");

  const handleClick = (platform) => {
    setActiveTab(platform);
  };

  return (
    <div id="contest" className="contestSection">
      <div className="tabSection">
      <div className="tabs flex">
        <a
          className={`tab tab-lifted flex-1 ${
            activeTab === "Fastforces" ? "tab-active" : ""
          }`}
          onClick={() => handleClick("Fastforces")}
        >
          Fastforces
        </a>
        <a
          className={`tab tab-lifted flex-1 ${
            activeTab === "Codeforces" ? "tab-active" : ""
          }`}
          onClick={() => handleClick("Codeforces")}
        >
          Codeforces
        </a>
        <a      
          className={`tab tab-lifted flex-1 ${
            activeTab === "Codechef" ? "tab-active" : ""
          }`}
          onClick={() => handleClick("Codechef")}
        >
          Codechef
        </a>
        <a
          className={`tab tab-lifted flex-1 ${
            activeTab === "LeetCode" ? "tab-active" : ""
          }`}
          onClick={() => handleClick("LeetCode")}
        >
          LeetCode
        </a>
        <a
          className={`tab tab-lifted flex-1 ${
            activeTab === "AtCoder" ? "tab-active" : ""
          }`}
          onClick={() => handleClick("AtCoder")}
        >
          AtCoder
        </a>
      </div>
      </div>
      <ContestBody platform={activeTab} icon={SiCodeforces} />
    </div>
  );
};

export default Main;
