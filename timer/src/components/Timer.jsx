import { useState, useEffect, useRef } from "react";
export const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setisRunning] = useState(false);
  const timerRef = useRef();
  useEffect(() => {
    startTimer();
    return pauseTimer;
  }, []);
  const startTimer = () => {
    if (isRunning) {
      return;
    }
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    setisRunning(true);
  };
  const pauseTimer = () => {
    clearInterval(timerRef.current);
    setisRunning(false);
  };
  const stopTimer = () => {
    clearInterval(timerRef.current);
    setisRunning(false);
    setTimer(0);
  };
  return (
    <div>
      <h2>{timer}</h2>
      <br />
      <button disabled={isRunning} onClick={startTimer}>
        {timer === 0 ? "Start" : "Resume"}
      </button>
      <br />
      <button disabled={!isRunning} onClick={pauseTimer}>
        Pause
      </button>
      <br />
      <button onClick={stopTimer}>Reset</button>
    </div>
  );
};
