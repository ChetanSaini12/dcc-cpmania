import React, { useEffect, useState } from "react";

const ContestBody = (props) => {
  const [contests, setContests] = useState(null);
  const slug = props.platform.toLowerCase();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setContests(null);
        const response = await fetch(`https://super-school-uniform-pike.cyclic.app/schedule/${slug}`, {
          method: "GET",
        });
        const data = await response.json();
        console.log("data");
        console.log(data);
        setContests(data);
      } catch (error) {
        console.error("Error fetching Contest:", error);
      }
    };

    fetchData();

    // }, 10000);
  }, [slug]);

  const formatTime = (timeInSeconds) => {
    const days = Math.floor(timeInSeconds / 86400);
    const hours = Math.floor((timeInSeconds % 86400) / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);

    if (days > 0) {
      return `${days}:${hours < 10 ? "0" : ""}${hours}:${
        minutes < 10 ? "0" : ""
      }${minutes}`;
    } else {
      return `${hours < 10 ? "0" : ""}${hours}:${
        minutes < 10 ? "0" : ""
      }${minutes}`;
    }
  };

  if (contests == null) {
    return <div>Loading...</div>;
  } else {
    return (
      //{}
      <>
        {/* {contests ? ( */}
        <div id="contestbody">
          <div className="contest-content">
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Duration</th>
                    <th>Starts In</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}

                  {contests.map((item, index) => {
                    let remainingTime = item.remaining_time;

                    let remainingHours = Math.floor(
                      remainingTime / (1000 * 60 * 60)
                    );
                    let remainingMinutes = Math.floor(
                      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
                    );
                    let remainingSeconds = Math.floor(
                      (remainingTime % (1000 * 60)) / 1000
                    );

                    //we want to await till the data is fetched

                    function timerStart() {
                      setInterval(() => {
                        remainingSeconds = remainingSeconds - 1;
                        document
                          .getElementById("counterSecond")
                          .style.setProperty("--value", remainingSeconds);
                        if (remainingSeconds == 0) {
                          remainingSeconds = 59;
                          remainingMinutes = remainingMinutes - 1;
                          document
                            .getElementById("counterMinute")
                            .style.setProperty("--value", remainingMinutes);
                        }
                        if (remainingMinutes == 0 && remainingSeconds == 0) {
                          remainingMinutes = 59;
                          remainingHours = remainingHours - 1;
                          document
                            .getElementById("counterHour")
                            .style.setProperty("--value", remainingHours);
                        }
                      }, 1000);
                    }

                    // Store the interval ID in a variable
                    const intervalId = setInterval(() => {
                      if (contests) {
                        console.log("timer started");
                        clearInterval(intervalId); // Stop the interval after executing timerStart()
                        setTimeout(() => {
                        timerStart();
                        }, 5000);
                      }
                    }, 1000);

                    console.log(
                      remainingHours +
                        ":" +
                        remainingMinutes +
                        ":" +
                        remainingSeconds
                    );

                    return (
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <a href="https://leetcode.com/" target="__blank">
                          <td>{item.name}</td>
                        </a>
                        <td>
                          {new Date(item.start_time).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </td>
                        <td>
                          {new Date(item.start_time).toLocaleTimeString(
                            "en-US",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: false,
                            }
                          )}
                        </td>
                        <td>
                          {new Date(item.end_time).toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: false,
                          })}
                        </td>
                        <td>{formatTime(item.duration)}</td>
                        {/* <td>{formatTime(item.remaining_time)}</td> */}
                        <td>
                          <span className="countdown font-mono " id="conuter">
                            <span
                              id="counterHour"
                              style={{ "--value": remainingHours }}
                            ></span>
                            :
                            <span
                              id="counterMinute"
                              style={{ "--value": remainingMinutes }}
                            ></span>
                            :
                            <span
                              id="counterSecond"
                              style={{ "--value": remainingSeconds }}
                            ></span>
                            {/* <span remainingSeconds></span> */}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* ) : ( */}
        {/* <div>Loading...</div> */}
        {/* )} */}
      </>
    );
  }
};

export default ContestBody;
