export const TimeCount = (props) => {

   let countDay = props.counttime.countday,
      titleDay = props.counttime.titleday,
      countHour = props.counttime.countour,
      titleHour = props.counttime.titlehour,
      countMinutes = props.counttime.countminutes,
      titleMinutes = props.counttime.titleminutes,
      countSec = props.counttime.countsec,
      titleSec = props.counttime.titlesec;

   return (
      <div className='time-count'>
         <div className="time-count__item time-count__days">
            <div className="time-count__val">{countDay}</div>
            <span className="time-count__text">{titleDay}</span>
         </div>
         <div className="time-count__separator">:</div>
         <div className="time-count__item time-count__hours">
            <div className="time-count__val">{countHour}</div>
            <span className="time-count__text">{titleHour}</span>
         </div>
         <div className="time-count__separator">:</div>
         <div className="time-count__item time-count__minutes">
            <div className="time-count__val">{countMinutes}</div>
            <span className="time-count__text">{titleMinutes}</span>
         </div>
         <div className="time-count__separator">:</div>
         <div className="time-count__item time-count__seconds">
            <div className="time-count__val">{countSec}</div>
            <span className="time-count__text">{titleSec}</span>
         </div>
      </div>
   )
}