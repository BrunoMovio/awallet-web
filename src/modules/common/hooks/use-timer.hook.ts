import { useEffect, useState } from "react";

export const useTimer = () => {
  const [timer, setTimer] = useState(0);

  const timerOver = timer === 0;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!timerOver) {
      interval = setInterval(() => {
        setTimer((t) => (t > 0 ? t - 1 : t));
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timerOver]);

  const startTimer = (durationInSeconds: number) => {
    setTimer(durationInSeconds);
  };

  return {
    startTimer,
    timer,
    isTimerRunning: !timerOver,
  };
};
