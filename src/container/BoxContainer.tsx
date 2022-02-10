import React, { useState, useEffect, useCallback, useRef } from 'react';
import Status, { StatusType } from '../components/Status';
import BoxWrap, { BoxesType } from '../components/BoxWrap';

function getColorData(stage: number) {
  function r() { return Math.floor(Math.random() * 255) };
  const R = r();
  const G = r();
  const B = r();
  let alpha = 100 - (100 / stage);
  if(alpha < 40) alpha = 40;
  if(alpha > 85) alpha = 85;

  const baseColor = `rgba(${R}, ${G}, ${B}, ${alpha}%)`;
  const pointColor = `rgba(${R}, ${G}, ${B}, 100%)`;
  return {
    baseColor,
    pointColor,
  }
}

function BoxContainer() {

  const [ status, setStatus ] = useState<StatusType>({ stage: 1, grade: 0, time: 15 });
  const [ boxes, setBoxes ] = useState<BoxesType>([]);

  useEffect(() => {
    const newBoxes:BoxesType = [];
    const total = Math.pow(Math.round((status.stage + 0.5) / 2) + 1, 2);
    const targetIndex = Math.floor(Math.random() * total);
    const { baseColor, pointColor } = getColorData(status.stage);
    for(let i = 0; i < total; i++){
      newBoxes.push({
        targetIndex,
        baseColor,
        pointColor,
      });
    }
    setBoxes(newBoxes);
  }, [status.stage]);

  const interval = useRef<ReturnType<typeof setInterval>>();
  useEffect(() => {
    interval.current = setInterval(() => {
      setStatus((status) => ({ ...status, time : status.time - 1}));
    }, 1000);
    return () => {
      if(interval.current) clearInterval(interval.current);
    };
  }, []);

  useEffect(() => {
    if(status.time <= 0) {
      setStatus({
        stage: 1,
        grade: 0,
        time: 15,
      });
      window.alert(`Game Over! \nGrade : ${status.grade}`);
    }    
  }, [status.time, status.grade]);

  const handleClickBox = useCallback((index: Number, targetIndex: Number) => {
    if(index === targetIndex) {
      setStatus(status => ({
        stage: status.stage +1,
        grade: Math.pow(status.stage, 3) * status.time,
        time: 15
      }));
    } else {
      setStatus(status => {
        const nextTime = status.time - 3;
        return { ...status, time: nextTime <= 0 ? 0 : nextTime }
      });
    }
  }, []);
  return (
    <>
      <Status 
        status={status}
      />
      <BoxWrap 
        boxes={boxes}
        onClickBox={handleClickBox}
      />
    </>
  );
}

export default BoxContainer;
