import React from 'react';
import './Status.css';

interface StatusProps {
  stage: Number
  time: Number
  grade: Number
}

const Status = ({
  stage,
  time,
  grade,
}: StatusProps) => { 
  return (
    <div className="status">
      <ul>
        <li>스테이지: {stage}</li>
        <li>남은 시간: {time}</li>
        <li>점수: {grade}</li>
      </ul>
    </div>
  )
};

export default Status;
