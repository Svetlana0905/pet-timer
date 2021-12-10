import { calendar } from '../data';
import { useState, useEffect } from 'react';

import { Timer } from './Timer';
import { GetDate } from '../Components/GetDate';


export function GetUserDate() {
   const call = Object.entries(calendar);
   const [getMounth, setGetMounth] = useState(0);
   const [daysInMounth, setDaysInMounth] = useState([1]);
   const [getDay, setGetDay] = useState(1);
   const [getYear, setGetYear] = useState(2021);
   const [colorText, setColorText] = useState('get-time__text red');
   const [userDate, setUserDate] = useState();

   function getMounthDays(event) {
      setGetMounth(+event.target.value);
      let days = call[getMounth][1];
      let arr = [];
      for (let i = 0; i < days; i++) {
         arr.push(i + 1);
      }
      setDaysInMounth(arr);
   }
   function getDays(event) {
      setGetDay(+event.target.value + 1);
   }
   function getYears(event) {
      setGetYear(+event.target.value);
   }
   useEffect(() => {
      setUserDate(new Date(getYear, getMounth, getDay));
   }, [getDay, getMounth, getYear]);

   useEffect(() => {
      userDate > new Date() ? setColorText('get-time__text') : setColorText('get-time__text red');
   }, [userDate])

   const getdate = {
      colortext: colorText,
      getyears: getYears,
      getmounth: getMounthDays,
      getdays: getDays,
      daysinmounth: daysInMounth,
   };

   return (
      <main className='main'>
         <section className='section'>
            <h3 className='get-time__title'>До выбранной даты осталось:</h3>
            <Timer userDate={userDate} />
            <GetDate date={getdate} />
         </section>
      </main>
   );
}
