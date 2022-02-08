import React, { useState, useEffect, useCallback } from 'react';
import Status from '../components/Status';
import BoxWrap, { BoxesType } from '../components/BoxWrap';
import { useInterval } from '../hooks';

function BoxContainer() {
  const [ stage, setStage ] = useState(1);
  const [ grade, setGrade ] = useState(0);
  const [ time, setTime ] = useState(15);
  const [ boxes, setBoxes ] = useState<BoxesType>([]);

  useEffect(() => {
    const newBoxes:BoxesType = [];
    const total = Math.pow(Math.round((stage + 0.5) / 2) + 1, 2);
    const targetIndex = Math.floor(Math.random() * total);
    for(let i = 0; i < total; i++){
      newBoxes.push({
        targetIndex,
        baseColor:'',
        pointColor: '',
      });
    }
    setBoxes(newBoxes);
    console.log('current stage', stage, total);
  }, [stage]);
  let timer: any;
  useEffect(() => {
    timer = setInterval(() => {
      const nextTime = time - 1;
      setNextTime(nextTime);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time]);

  const handleClickBox = useCallback((index: Number, targetIndex: Number) => {
    if(index === targetIndex) {
      setStage(stage + 1);
      setGrade(grade + 1);
      setNextTime(15);
    } else {
      const nextTime = time - 3;
      setNextTime(nextTime);
    }
  }, [stage, grade, time]);

  const setNextTime = (nextTime:number) => {
    if(nextTime <= 0) {
      setTime(15);
      setStage(1);
      setGrade(0);
      clearInterval(timer);
      window.alert('끝났슈');
    } else {
      setTime(nextTime);
    }
  }

  console.log('render container');
  return (
    <>
      <Status stage={stage} grade={grade} time={time}/>
      <BoxWrap 
        boxes={boxes}
        onClickBox={handleClickBox}
      />
    </>
  );
}

export default BoxContainer;
