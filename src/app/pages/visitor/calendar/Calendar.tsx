import './calendar.scss'

const Calendar = () => {
  const today = new Date();
  const currentMonth: number = today.getMonth();
  const currentYear: number = today.getFullYear();
  const currentDate: number = today.getDate();


  const currentMonthName: string = today.toLocaleString('en-US', { month: 'long' });

  // Функция для получения количества дней в месяце
  const getDaysInMonth = (month: number, year: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Функция для генерации дат в календаре
  const generateCalendar = (): JSX.Element[] => {
    const daysInMonth: number = getDaysInMonth(currentMonth, currentYear);
    const days: JSX.Element[] = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const date: Date = new Date(currentYear, currentMonth, day);
      let className: string = '';

      if (day === currentDate) {
        className = 'today';
      } else if (date < today) {
        className = 'past';
      }

      days.push(
        <div key={day} className={`calendar-day ${className}`}>
          <p className='calendar-day-number'>{day}</p>
          <p className='calendar-time'>11am - 6pm</p>
        </div>
      );
    }

    return days;
  };


  return(
    <div className="calendar">
      <div className="calendar-header">
        <h2>{currentMonthName} {currentYear}</h2>
      </div>
      <div className="calendar-grid">

        <p className='calendar-day calendar-weeak'>Sun.</p>
        <p className='calendar-day calendar-weeak'>Mon.</p>
        <p className='calendar-day calendar-weeak'>Tue.</p>
        <p className='calendar-day calendar-weeak'>Wed.</p>
        <p className='calendar-day calendar-weeak'>Thu.</p>
        <p className='calendar-day calendar-weeak'>Fri.</p>
        <p className='calendar-day calendar-weeak'>Sat.</p>

        {generateCalendar()}
      </div>
    </div>
  )
}

export default Calendar