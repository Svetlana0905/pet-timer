export const GetDate = (props) => {

   let colorText = props.date.colortext,
      getYears = props.date.getyears,
      getMounth = props.date.getmounth,
      call = props.date.arr,
      getDays = props.date.getdays,
      daysInMounth = props.date.daysinmounth,
      disabledBtn = props.date.disabledbtn,
      timeCount = props.date.timecount;

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
                  {call.map((item, index) => <option className='option' key={index} value={index}>{item[0]}</option>)}
               </select>
               <select name='day' onChange={getDays} className='get-time__select'>
                  {daysInMounth.map((item, index) => <option key={index} value={index}>{item}</option>)}
               </select>
            </div>
         </div>
         <button type='button' disabled={disabledBtn} className='get-time__button' onClick={timeCount}>Start</button>
      </>
   )
}