import React, { useState, useEffect } from "react";
import CountDownUtilsTimeStamp from "./CountDownUtils.js";
import "./CountDownTimer.css";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const CountDownTimer = ({ countDownTimeStamp }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countDownTimeStamp);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countDownTimeStamp]);

  function updateRemainingTime(countDown) {
    setRemainingTime(CountDownUtilsTimeStamp(countDown));
  }

  return (
    <div className="container_timer my-5">
      <h3 className="text-center fw-bold my-2">Class will started soon....</h3>
      <div className="timer">
        <div className="countdown_timer">
          <span>{remainingTime.days}</span>
          <span>Days</span>
          <span>{remainingTime.hours}</span>
          <span>Hours</span>
          <span>{remainingTime.minutes}</span>
          <span>Minutes</span>
          <span>{remainingTime.seconds}</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
