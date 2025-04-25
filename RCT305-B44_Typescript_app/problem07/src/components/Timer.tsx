
import React, { useState, useEffect } from 'react';

interface TimerState {
  seconds: number;
  isRunning: boolean;
}

const Timer: React.FC = () => {
  const [timer, setTimer] = useState<TimerState>({ seconds: 0, isRunning: false });

  const startTimer = () => {
    if (!timer.isRunning) {
      setTimer((prevTimer) => ({ ...prevTimer, isRunning: true }));
    }
  };

  const stopTimer = () => {
    setTimer((prevTimer) => ({ ...prevTimer, isRunning: false }));
  };

  const resetTimer = () => {
    setTimer({ seconds: 0, isRunning: false });
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timer.isRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => ({ ...prevTimer, seconds: prevTimer.seconds + 1 }));
      }, 1000);
    } else if (!timer.isRunning && timer.seconds !== 0) {
      clearInterval(interval as NodeJS.Timeout);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer.isRunning, timer.seconds]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Timer: {timer.seconds} seconds</h1>
      <div>
        <button onClick={startTimer} disabled={timer.isRunning}>Start</button>
        <button onClick={stopTimer} disabled={!timer.isRunning}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
