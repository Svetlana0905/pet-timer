import { calendar } from '../data';

export const GetDate = (props) => {

   let getYears = props.date.getyears,
      getMounth = props.date.getmounth,
      colorText = props.date.colortext,
      getDays = props.date.getdays,
      daysInMounth = props.date.daysinmounth,
      objectData = Object.keys(calendar);

   return (
      <>
         <div className='get-time'>
            <h3 className='get-time__title'>Выберите дату</h3>
            <p className={colorText}>Дата должна быть больше сегодняшней даты</p>
            <div className='get-time__inner'>
               <select name='year' onChange={getYears} className='get-time__select'>
                  <option value='2021'>2021</option>
                  <option value='2022'>2022</option>
               </select>
               <select name='mounth' onChange={getMounth} className='get-time__select'>
                  {objectData.map((item, index) => <option className='option' key={index} value={index}>{item}</option>)}
               </select>
               <select name='day' onChange={getDays} className='get-time__select'>
                  {daysInMounth.map((item, index) => <option key={index} value={index}>{item}</option>)}
               </select>
            </div>
         </div>
      </>
   )
}