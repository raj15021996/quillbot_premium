import "./Sliders.css";
import bg from './backgroundImg.jpg';
import React, { useState, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";
function App() {
  const [progress, setProgress] = useState(0);
  const [activeBox, setActiveBox] = useState(1);

  const handleActive = (id) => {
    setActiveBox(id);
    setProgress(0);
  };

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        return Math.min(oldProgress + 12, 100);
      });
    }, 500);
    const activeTimer = setInterval(() => {
      setActiveBox((oldbox) => {
        if (oldbox === 4) {
          return 1;
        }
        return Math.min(oldbox + 1, 4);
      });
      setProgress(0);
    }, 5000);
    console.log("run");
    return () => {
      clearInterval(progressTimer);
      clearInterval(activeTimer);
    };
  }, []);
  return (
    <div className="main" style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      height: "auto",
      width: '100%' 
    }}>
      <div className="image">
        <img src={`${activeBox}.jpg`} alt="img" />
      </div>
      <div className="container">
        <div className="box">
          <div
            onClick={() => handleActive(1)}
            className="headings"
            style={{ color: activeBox === 1 ? "black" : "green" }}
          >
            Increase your productivity
          </div>

          <div className="details">
            Paraphrase more text at once to finish writing faster.
          </div>
          <div className="progress">
            <LinearProgress
              variant="determinate"
              value={activeBox === 1 ? progress : 0}
              color="success"
            />
          </div>
        </div>

        <div className="box">
          <div
            onClick={() => handleActive(2)}
            className="headings"
            style={{ color: activeBox === 2 ? "black" : "green" }}
          >
            {" "}
            Access all modes
          </div>

          <div className="details">
            Get maximum control over how you paraphrase.
          </div>
          <div className="progress">
            <LinearProgress
              variant="determinate"
              value={activeBox === 2 ? progress : 0}
              color="success"
            />
          </div>
        </div>
        <div className="box">
          <div
            onClick={() => handleActive(3)}
            className="headings"
            style={{ color: activeBox === 3 ? "black" : "green" }}
          >
            Scan for plagiarism
          </div>

          <div className="details">
            Unlock the Plagiarism Checker to guarantee all sources are cited and
            nothing is unintentionally plagiarized.
          </div>
          <div className="progress">
            <LinearProgress
              variant="determinate"
              value={activeBox === 3 ? progress : 0}
              color="success"
            />
          </div>
        </div>
        <div className="box">
          <div
            onClick={() => handleActive(4)}
            className="headings"
            style={{ color: activeBox === 4 ? "black" : "green" }}
          >
            Compare all mode outputs at once
          </div>

          <div className="details">
            Paraphrase in and compare outputs from all seven modes.
          </div>
          <div className="progress">
            <LinearProgress
              variant="determinate"
              value={activeBox === 4 ? progress : 0}
              color="success"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
