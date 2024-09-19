'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { NextPage } from 'next';

import './selectDataTicket.scss';
import FormPopup from '@/app/components/UI/formPopup/FormPopup';

const SelectDatePage: NextPage = () => {
  const TICKET_PRICE = 85;
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [formState, setFormState] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const increment = () => {
    count <= 9 && setCount(count + 1);
  };

  const decrement = () => {
    count >= 2 && setCount(count - 1);
  };

  return (
    <div className="container">
      <h1 className="heading">Select a Date for Your Ticket</h1>

      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MMMM d, yyyy"
        minDate={new Date()}
        inline
        className="custom-datepicker"
      />

      <div className='more-ticket'>
        <p className='more-ticket-subtitle'>Select the number of tickets:</p>

        <div className="counter-container">
          <button className="counter-button" onClick={increment}>+</button>
          <span className="counter-display">{count}</span>
          <button className="counter-button" onClick={decrement}>-</button>
        </div>
      </div>
      
      <div className='total-panel'>
        <button 
          onClick={() => setFormState(true)} 
          className='buy-ticket-button'
          disabled={!selectedDate}
        >
          Pay Now
        </button>
        <p className='total-text'>Total: <b>{count * TICKET_PRICE}$</b></p>
      </div>

      {formState && <FormPopup setFormState={setFormState} money={count * TICKET_PRICE} tickets={count} data={selectedDate}/>}
    </div>
  );
};

export default SelectDatePage;