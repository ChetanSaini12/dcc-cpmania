import React, { useEffect, useState } from 'react';

const ContestBody = (props) => {
  const [contests, setContests] = useState(null);
  const slug = props.platform?.toLowerCase();

  /**
   * Timer logic to manage a countdown for each contest.
   *
   * @param {Array|null} contests - Array of contests.
   * @returns {Number|null} - The identifier of the interval timer if contests exist, null otherwise.
   *
   * 1. If contests exist, an interval timer is set for every second.
   * 2. For each interval:
   *    a. It retrieves all the 'counterSecond', 'counterMinute', 'counterHour' elements.
   *    b. It decrements the value of each 'counterSecond' element by 1.
   *    c. If any 'counterSecond' reaches 0, it resets this counter to 59 and decrements the associated 'counterMinute' by 1.
   *    d. If any 'counterMinute' reaches 0 in the process, it resets this counter to 59 and decrements the associated 'counterHour' by 1.
   * 3. The function returns the intervalId to allow it to be cleared when the component unmounts or data changes.
   **/

  const timerStart = (contests) => {
    let intervalId = null;
    if (contests) {
      intervalId = setInterval(() => {
        const remainingSecondsEls =
          document.getElementsByClassName('counterSecond');
        const remainingMinutesEls =
          document.getElementsByClassName('counterMinute');
        const remainingHoursEls =
          document.getElementsByClassName('counterHour');

        for (let i = 0; i < remainingSecondsEls.length; i++) {
          // second reduce kerne ka logic start
          let remainingSeconds = parseFloat(
            window
              .getComputedStyle(remainingSecondsEls[i])
              .getPropertyValue('--value')
          );
          remainingSeconds = remainingSeconds - 1;
          console.log('second reduce'); // debugging ke baad remove ker dena
          remainingSecondsEls[i].style.setProperty('--value', remainingSeconds);
          // second reduce kerne ka logic end

          // minute reduce kerne ka logic start
          if (remainingSeconds === 0) {
            let remainingMinutes = parseFloat(
              window
                .getComputedStyle(remainingMinutesEls[i])
                .getPropertyValue('--value')
            );
            remainingMinutes = remainingMinutes - 1;
            console.log('minute reduce'); // debugging ke baad remove ker dena
            remainingSecondsEls[i].style.setProperty('--value', 59);
            remainingMinutesEls[i].style.setProperty(
              '--value',
              remainingMinutes
            );
            // minute reduce kerne ka logic end

            // hour reduce kerne ka logic start
            if (remainingMinutes === 0) {
              let remainingHours = parseFloat(
                window
                  .getComputedStyle(remainingHoursEls[i])
                  .getPropertyValue('--value')
              );
              remainingHours = remainingHours - 1;
              console.log('hour reduce'); // debugging ke baad remove ker dena
              remainingMinutesEls[i].style.setProperty('--value', 59);
              remainingHoursEls[i].style.setProperty('--value', remainingHours);
            }
            // hour reduce kerne ka logic end
          }
        }
      }, 1000);
    }
    // interval clear kerne ke liye intervalId return kia hai
    return intervalId;
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching data...'); // debugging ke baad remove ker dena
      try {
        setContests(null);
        const response = await fetch(
          `https://super-school-uniform-pike.cyclic.app/schedule/${slug}`,
          {
            method: 'GET',
          }
        );
        const data = await response.json();
        console.log('data', data);
        setContests(data);
      } catch (error) {
        console.error('Error fetching Contest:', error);
      }
    };
    fetchData();
  }, [slug]);

  /**
   * Sets an interval timer for countdown for each contest whenever 'contests' changes.
   *
   * @function
   * @fires timerStart
   * @fires clearInterval
   *
   * 1. If 'contests' exist, calls 'timerStart' function and stores the returned interval ID.
   * 2. When the component unmounts or 'contests' changes, the interval timer associated with the interval ID is cleared.
   */

  useEffect(() => {
    let intervalId = null;
    console.log('setting timer...');
    if (contests) {
      intervalId = timerStart(contests);
    }
    // Cleanup function to be run jab component unmount ho raha ho
    return () => {
      console.log('clearing timer...'); // debugging ke baad remove ker dena
      clearInterval(intervalId);
    };
  }, [contests]);

  const formatTime = (timeInSeconds) => {
    const days = Math.floor(timeInSeconds / 86400);
    const hours = Math.floor((timeInSeconds % 86400) / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);

    if (days > 0) {
      return `${days}:${hours < 10 ? '0' : ''}${hours}:${
        minutes < 10 ? '0' : ''
      }${minutes}`;
    } else {
      return `${hours < 10 ? '0' : ''}${hours}:${
        minutes < 10 ? '0' : ''
      }${minutes}`;
    }
  };

  if (contests == null) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
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

                    return (
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <a href="https://leetcode.com/" target="__blank">
                          <td>{item.name}</td>
                        </a>
                        <td>
                          {new Date(item.start_time).toLocaleDateString(
                            'en-US',
                            {
                              month: 'long',
                              day: 'numeric',
                            }
                          )}
                        </td>
                        <td>
                          {new Date(item.start_time).toLocaleTimeString(
                            'en-US',
                            {
                              hour: '2-digit',
                              minute: '2-digit',
                              hour12: false,
                            }
                          )}
                        </td>
                        <td>
                          {new Date(item.end_time).toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false,
                          })}
                        </td>
                        <td>{formatTime(item.duration)}</td>
                        <td>
                          <span className="countdown font-mono " id="conuter">
                            <span
                              class="counterHour"
                              style={{ '--value': remainingHours }}
                            ></span>
                            :
                            <span
                              class="counterMinute"
                              style={{ '--value': remainingMinutes }}
                            ></span>
                            :
                            <span
                              class="counterSecond"
                              style={{ '--value': remainingSeconds }}
                            ></span>
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
