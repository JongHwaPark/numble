import React from 'react';
import './BoxWrap.css';

import Box, { BoxType } from '../Box';

export type BoxesType = BoxType[];
interface BoxWrapProps {
  boxes: BoxesType,
  onClickBox: Function,
}

const BoxWrap = ({
  boxes,
  onClickBox,
}: BoxWrapProps) => { 
  const colums = Math.sqrt(boxes.length);
  return (
    <div className="box-wrap" style={{  gridTemplateColumns: `repeat(${colums}, 1fr)` }}>
    {boxes.map((data, index) => (
      <Box
        key={index} 
        index={index} 
        {...data} 
        onClickBox={onClickBox}
      />
    ))}
    </div>
  )
};

export default React.memo(BoxWrap);
