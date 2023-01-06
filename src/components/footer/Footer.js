import './footer.css'
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const initialState = [
  {
    data: 70,
    sign:"%",
    _details:'time saved',
    about:'Average time savings per writing project.'
  },
  {
    data: 50,
    sign:"+",
    _details:'million',
    about:'Trusted by millions worldwide.'
  },
  {
    data: 85,
    sign:"%",
    _details:'of students',
    about:'Who reported their grades improved after using QuillBot.'  
}
];
export default function Footer() {
  const [data, setData] = useState(initialState);

  return (
    <div className="App">
      
      <div className="footer-heading">
        <p className="heading">Write better, faster, and clearer instantly</p>
        <p className="sub-heading">
          QuillBot is trusted by students, professional writers, and business
          people who want to write more effectively.
        </p>
      </div>
      <div className="circular-data">
        <div className="circular-bar">
          {data.map((obj, idx) => {
           
            return (
              <div className='c-container'
              key={idx}>
                <ProgressBar val={obj.data} sign={obj.sign} details={obj._details} abouts={obj.about}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
