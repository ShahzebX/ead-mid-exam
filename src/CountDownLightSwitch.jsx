import { useEffect } from "react";
import { useState } from "react";

const CountDownLightSwitch = () => {
  const [lightMode, setLightMode] = useState(false);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer !== 0)
      setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
  }, [timer]);

  const startTimer = () => {
    setTimer(30);
  };

  const toggleLightMode = () => {
    setLightMode((prev) => !prev);
  };
  const resetTimer = () => {
    setTimer(30);
  };
  return (
    <div className={"container " + lightMode && "body.light"}>
      {/* <!-- Header with Title and Theme Toggle --> */}
      <div className="header">
        <h1>Countdown & Light Switch</h1>
        <div className="toggle-container">
          <label className="toggle-switch">
            <input
              type="checkbox"
              id="themeToggle"
              onChange={toggleLightMode}
            />
            <span className="slider"></span>
          </label>
          <span>Light Mode</span>
        </div>
      </div>

      {/* <!-- Timer and Progress Section --> */}
      <div className="timer-section">
        <div className="progress-bar">
          <div className="progress" id="progress"></div>
        </div>
        <div className="timer" id="timerDisplay">
          {timer ? timer + "s" : "Time's Up!"}
        </div>
        <div className="btn-group">
          <button id="startButton" onClick={startTimer}>
            Start Timer
          </button>
          <button id="resetButton" style="display: none">
            {" "}
            onClick={resetTimer}
            Reset Timer
          </button>
        </div>
        <div className="message" id="messageArea"></div>
      </div>
    </div>
  );
};

export default CountDownLightSwitch;
