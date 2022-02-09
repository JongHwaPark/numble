import React from 'react';
import './Box.css';

export interface BoxType {
  targetIndex: Number
  baseColor: String,
  pointColor: String,
}

interface BoxProps extends BoxType {
  index: Number
  onClickBox: Function
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
      className={`box`}
      style={{  backgroundColor: `${ index === targetIndex ? pointColor : baseColor }` }}
      onClick={onClickBox.bind(this, index, targetIndex)}
    />
  )
};

export default Box;
