import { useState } from 'react';

import { TimeCount } from '../Components/TimeCount';

export function Timer(props) {
   const [countDay, setCountDay] = useState('00');
   const [countHour, setCountHour] = useState('00');
   const [countMinutes, setCountMinutes] = useState('00');
   const [countSec, setCountSec] = useState('00');
   const [idInterval, setIdInterval] = useState(null);

   function startCount() {
      function start() {
         let leftUntil = props.userDate - new Date();
         if (leftUntil > 0) {
            let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
            let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
            let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
            let seconds = Math.floor(leftUntil / 1000) % 60;
            setCountDay(days);
            setCountHour(hours);
            setCountMinutes(minutes);
            setCountSec(seconds);
         }
      }
      if (idInterval == null) {
         start();
         setIdInterval(setInterval(start, 1000));
      } else {
         clearInterval(idInterval);
         start();
         setIdInterval(setInterval(start, 1000));
      }
   };

   const timecount = {
      countday: countDay,
      countour: countHour,
      countminutes: countMinutes,
      countsec: countSec,
      startCount: startCount,
   };

   return (
      <TimeCount counttime={timecount} />
   );
}