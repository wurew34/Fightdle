import { useState, useEffect } from "react";
import "./style.css";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const resetTime = new Date();
    resetTime.setDate(resetTime.getDate() + 1); // Set reset time to tomorrow

    resetTime.setHours(0, 0, 0, 0); // Set reset time to midnight

    const timeDifference = resetTime.getTime() - now.getTime();

    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    return { hours, minutes, seconds };
  }

  return (
    <div className="countdown">
      <h1>NEXT FIGHT</h1>
      <div>
        <span>{timeLeft.hours}H </span>
        <span>{timeLeft.minutes}M </span>
        <span>{timeLeft.seconds}s</span>
      </div>
    </div>
  );
};

export default Countdown;
