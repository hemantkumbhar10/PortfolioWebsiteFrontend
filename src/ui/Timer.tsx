import React, { useState, useEffect } from "react";

import classes from "./styles/Timer.module.css";

const Timer = () => {
  const [years, setYears] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const startline = "November, 3, 2020";

  const getTime = (startline: string) => {
    const time = Date.now() - Date.parse(startline);
    // console.log(time);

    setYears(Math.ceil(time / (1000 * 60 * 60 * 24) / 365));
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor(time / (1000 * 60 * 60)));
    setMinutes(Math.floor(time / 1000 / 60));
    setSeconds(Math.floor(time / 1000));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(startline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.timer}>
      <div className={classes.timers}>
        <div className={classes.years}>
          <h2>{years}</h2>
          <h3>Years</h3>
        </div>
        <div className={classes.days}>
          <h2>{days} </h2>
          <h3>days</h3>
        </div>
        <div className={classes.hours}>
          <h2>{hours} </h2>
          <h3>hours</h3>
        </div>
        <div className={classes.minutes}>
          <h2>{minutes} </h2>
          <h3>minutes</h3>
        </div>
        <div className={classes.seconds}>
          <h2>{seconds} </h2>
          <h3>seconds</h3>
        </div>
      </div>
      <p>spent making websites</p>
    </div>
  );
};

export default Timer;
