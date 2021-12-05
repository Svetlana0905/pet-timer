import './style/App.scss';
import { calendar } from './data';
import { useState } from 'react';

import { TimeCount } from './Components/TimeCount';
import { GetDate } from './Components/GetDate';


function App() {
  const call = Object.entries(calendar);
  const [getMounth, setGetMounth] = useState(0);
  const [daysInMounth, setDaysInMounth] = useState([1]);
  const [getDay, setGetDay] = useState(1);
  const [getYear, setGetYear] = useState(2021);
  const [countDay, setCountDay] = useState('00');
  const [countHour, setCountHour] = useState('00');
  const [countMinutes, setCountMinutes] = useState('00');
  const [countSec, setCountSec] = useState('00');
  const [colorText, setColorText] = useState('get-time__text red');
  const [idInterval, setIdInterval] = useState(null);


  function getMounthDays(event) {
    let mounth = +event.target.value;
    setGetMounth(mounth);
    let days = call[mounth][1];
    let arr = [];
    for (let i = 0; i < days; i++) {
      arr.push(i + 1);
    }
    setDaysInMounth(arr);
  }
  function getDays(event) {
    let day = +event.target.value + 1;
    setGetDay(day);
  }
  function getYears(event) {
    let year = +event.target.value;
    setGetYear(year);
  }

  function startCount() {
    let userDate = new Date(getYear, getMounth, getDay);
    function start() {
      let nowDate = new Date();
      let leftUntil = userDate - nowDate;
      if (leftUntil > 0) {
        setColorText('get-time__text');
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
      setIdInterval(null);
      start();
      setIdInterval(setInterval(start, 1000));
    }
  };

  const timecount = {
    countday: countDay,
    countour: countHour,
    countminutes: countMinutes,
    countsec: countSec,
  };

  const getdate = {
    colortext: colorText,
    getyears: getYears,
    getmounth: getMounthDays,
    getdays: getDays,
    daysinmounth: daysInMounth,
    startCount: startCount,
  };

  return (
    <main className='main'>
      <section className='section'>
        <h3 className='get-time__title'>До выбранной даты осталось:</h3>
        <TimeCount counttime={timecount} />
        <GetDate date={getdate} />
      </section>
    </main>
  );
}

export default App;
