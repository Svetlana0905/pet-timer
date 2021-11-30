import './style/App.scss';
import { calendar } from './data';
import { useState } from 'react';

import { TimeCount } from './Components/TimeCount';
import { GetDate } from './Components/GetDate';

function App() {

  const call = Object.entries(calendar);
  const [mounth, setMounth] = useState('');
  const [daysInMounth, setDaysInMounth] = useState([1]);
  const [getDay, setGetDay] = useState(1);
  const [getYear, setGetYear] = useState(2021);
  const [countDay, setCountDay] = useState('00');
  const [countHour, setCountHour] = useState('00');
  const [countMinutes, setCountMinutes] = useState('00');
  const [countSec, setCountSec] = useState('00');
  const [titleDay, setTitleDay] = useState('дней');
  const [titleHour, setTitleHour] = useState('часов');
  const [titleMinutes, setTitleMinutes] = useState('минут');
  const [titleSec, setTitleSec] = useState('секунд');
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [colorText, setColorText] = useState('get-time__text-red');

  function getMounth(event) {
    let mounth = +event.target.value;
    setMounth(mounth);
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
  function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }
  function timeCount() {
    let userDate = new Date(getYear, mounth, getDay);
    setDisabledBtn(false);

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

        setTitleDay(declOfNum(days, ['день', 'дня', 'дней']));
        setTitleHour(declOfNum(hours, ['час', 'часа', 'часов']));
        setTitleMinutes(declOfNum(minutes, ['минута', 'минуты', 'минут']));
        setTitleSec(declOfNum(seconds, ['секунда', 'секунды', 'секунд']));
        setDisabledBtn(true);
      }
    }
    start();
    setInterval(start, 1000);
  };
  const timecount = {
    countday: countDay,
    titleday: titleDay,
    countour: countHour,
    titlehour: titleHour,
    countminutes: countMinutes,
    titleminutes: titleMinutes,
    countsec: countSec,
    titlesec: titleSec,
  };

  const getdate = {
    colortext: colorText,
    getyears: getYears,
    getmounth: getMounth,
    arr: call,
    getdays: getDays,
    daysinmounth: daysInMounth,
    disabledbtn: disabledBtn,
    timecount: timeCount,
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
