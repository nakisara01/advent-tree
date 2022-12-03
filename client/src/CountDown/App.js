import React, { useState, useEffect } from "react";
import Clock from "./CountDown/Clock";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [timerDays, settimerDays] = useState();
  const [timerHours, settimerHours] = useState();
  const [timerMinutes, settimerMinutes] = useState();
  const [timerSecondes, settimerSecondes] = useState();

  let interval;
  const startTimer = () => {
    const countDownDate = new Date("25 Dec, 2022").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));

      const hours = Math.floor(
        distance / (24 * 60 * 60 * 1000) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));

      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        //stop Timer
        clearInterval(interval.current);
      } else {
        settimerDays(days);
        settimerHours(hours);
        settimerMinutes(minutes);
        settimerSecondes(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div className="App">
      <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSecondes={timerSecondes}
      />
    </div>
  );
}

export default App;
