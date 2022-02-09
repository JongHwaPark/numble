import React from 'react';
import './Status.css';

export interface StatusType {
  stage: number;
  grade: number;
  time: number;
}

interface StatusProps {
  status: StatusType
}
const Status = ({ status }: StatusProps) => { 
  const { stage, time, grade} = status;
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
