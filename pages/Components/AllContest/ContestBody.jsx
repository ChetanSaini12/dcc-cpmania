import Link from "next/link";
import React, { useEffect, useState } from "react";
import LoadingAnimation from "../LoadingAnimation/LottieLoadingAnimation";
import { Base_Url } from "@/utils/Constants";
import axios from "axios";

const ContestBody = (props) => {
  const [contests, setContests] = useState(null);
  const slug = props.platform?.toLowerCase();

  useEffect(() => {
    fetchData();
    // }, 10000);
  }, [slug]);

  const fetchData = async () => {
    try {
      await axios.get(`${Base_Url}/schedule/${slug}`).then((res)=>{
        const {data}=res
        data.sort((a, b) => a.remaining_time - b.remaining_time);
        setContests(data);
      })
    } catch (error) {
      console.error("Error fetching Contest:", error);
    }
  };
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
    return (
      <div className="contestBody_loading">
        <div className="lottie" >
          <LoadingAnimation/>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div id="contestbody">
          <div className="contest-content">
            <div className="overflow-x-auto">
              <table className="table table-zebra">
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
                  {contests.map((item, index) => {
                    const remainingTime = item.remaining_time;

                    const remainingDays = Math.floor(
                      remainingTime / (1000 * 60 * 60 * 24)
                    );

                    const remainingHours = Math.floor(
                      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                    );
                    const remainingMinutes = Math.floor(
                      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
                    );
                    const remainingSeconds = Math.floor(
                      (remainingTime % (1000 * 60)) / 1000
                    );

                    // const url = 

                    return (
                      <tr key={index}>
                        <th>{index + 1}.</th>
                        <td>
                          <Link href={`${item.slug}`} target="__blank">{item.name}</Link>
                        </td>
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
                        <td>
                          <span className="count_down">
                            <span>
                              <span>{remainingDays}</span>
                            </span>
                            days
                            <span>
                              <span>{remainingHours}</span>
                            </span>
                            hours
                            <span>
                              <span>{remainingMinutes}</span>
                            </span>
                            min
                            <span>
                              <span>{remainingSeconds}</span>
                            </span>
                            sec
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
      </>
    );
  }
};

export default ContestBody;
