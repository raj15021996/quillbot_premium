import React, { useEffect, useState } from "react";
import './footer.css';
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressBar({ val,sign,details,abouts}) {
  const [values, setValues] = useState(0);
  const [progressSize, setProgressSize]=useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if(values<val){
        setValues(values+1);
        sign=='%' ? setProgressSize(val):setProgressSize(100);
      }
      
    },5);
    return () => {
      clearTimeout(timer);
    };
  }, [values]);

  return (
    <div style={{ textAlign: "center" }}>
      <div className="p-bar">
   
        <CircularProgressbarWithChildren
          value={progressSize}
          text={`${values}${sign}`}
          strokeWidth={5}
          styles={
            buildStyles({
            textColor: "#039634",
            pathColor: "#039634",
            textSize:'3.5rem'
          })}
        >
          <div className="del">
            <strong>{details}</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className="abouts">{abouts}</div>
    </div>
  );
}
