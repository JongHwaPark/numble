import React from 'react';
import './Box.css';

export interface BoxType {
  targetIndex: Number
  baseColor: String,
  pointColor: String,
}

interface BoxProps extends BoxType {
  index: Number
  onClickBox: any
}

const Box = ({
  index,
  targetIndex,
  pointColor,
  baseColor,
  onClickBox,
}: BoxProps) => { 
  return (
    <div 
      data-index={index} 
      data-target-index={targetIndex} 
      className={`box ${index === targetIndex && 'active'}`}
      onClick={onClickBox.bind(this, index, targetIndex)}
    />
  )
};

export default Box;
