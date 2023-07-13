import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ContestBody = (props) => {
  const [contests, setContests] = useState(null);
  const slug = props.platform.toLowerCase();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:7000/schedule/${slug}`, {
          method: "GET",
        });
        const data = await response.json();
        console.log("data");
        console.log(data);
        setContests(data);
        setTemp(contests.length);
      } catch (error) {
        console.error("Error fetching Contest:", error);
      }
    };

    fetchData();
  }, [contests]);

  useEffect(() => {
    const interval = setInterval(() => {
      setContests((contests) => {
         contests.map((contest) => {
          const remainingTime = contest.remaining_time - 1;
          return { ...contest, remaining_time: remainingTime };
        });
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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

  return (
    <div id="contestbody">
      {contests ? (
        <div className="contest-content">
          <h1>{props.platform}</h1>
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

                {contests.map((item) => (
                  <tr>
                    <th>1</th>
                    <td>{item.name}</td>
                    <td>
                      {new Date(item.start_time).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                      })}
                    </td>
                    <td>
                      {new Date(item.start_time).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      })}
                    </td>
                    <td>
                      {new Date(item.end_time).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      })}
                    </td>
                    <td>{formatTime(item.duration)}</td>
                    <td>{formatTime(item.remaining_time)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ContestBody;
