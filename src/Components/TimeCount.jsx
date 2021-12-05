export const TimeCount = (props) => {

   let countDay = props.counttime.countday,
      countHour = props.counttime.countour,
      countMinutes = props.counttime.countminutes,
      countSec = props.counttime.countsec;

   return (
      <div className='time-count'>
         <div className="time-count__item time-count__days">
            <div className="time-count__val">{countDay}</div>
            <span className="time-count__text">Дни</span>
         </div>
         <div className="time-count__separator">:</div>
         <div className="time-count__item time-count__hours">
            <div className="time-count__val">{countHour}</div>
            <span className="time-count__text">Часы</span>
         </div>
         <div className="time-count__separator">:</div>
         <div className="time-count__item time-count__minutes">
            <div className="time-count__val">{countMinutes}</div>
            <span className="time-count__text">Минуты</span>
         </div>
         <div className="time-count__separator">:</div>
         <div className="time-count__item time-count__seconds">
            <div className="time-count__val">{countSec}</div>
            <span className="time-count__text">Секунды</span>
         </div>
      </div>
   )
}