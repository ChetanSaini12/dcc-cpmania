import React from "react";

const Issue = (props) => {
  return (
    <div id="issue">
      <div
        className="in-progress-container"
        data-aos="zoom-in-down"
        data-aos-delay="100"
        data-aos-duration="500"
        data-aos-easing="ease-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <h1 className="in-progress-message">{props.title}</h1>
      </div>
    </div>
  );
};

export default Issue;
