import React, { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressBar({ val,sign,details,abouts}) {
  const [values, setValues] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValues(val);
    },500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div style={{ textAlign: "center" }}>

      <div style={{  fontWeight:"bold"}}>
        <CircularProgressbarWithChildren
          value={values}
          text={`${values}${sign}`}
          strokeWidth={5}
          styles={
            buildStyles({
            textColor: "#039634",
            pathColor: "#039634"
          })}
        >
          <div style={{ fontSize: 20, marginTop: 40, color: "#039634" }}>
            <strong>{details}</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className="abouts">{abouts}</div>
    </div>
  );
}
