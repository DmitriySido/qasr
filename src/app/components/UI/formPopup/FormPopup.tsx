import { useEffect, useState } from 'react';
import './formPopup.scss';

interface IForm {
  money: number;
  tickets: number;
  data: Date | null;
  setFormState: (state: boolean) => void;
}

const FormPopup = ({ money, tickets, data, setFormState }: IForm) => {
  const formattedDate = data ? data.toLocaleDateString() + ' (11AM-6PM)' : 'No date selected';

  const [cardData, setCardData] = useState('');
  const [valueTel, setValueTel] = useState<string>('');
  const [valueCard, setValueCard] = useState<string>('');

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => document.body.classList.remove('no-scroll')
  }, []);

  const handleCardDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.replace(/\D/g, '');

    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
    }

    setCardData(value);
  };

  const handleTelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/\D/g, '');

    if (inputValue.length <= 13) {
      setValueTel(inputValue);
    }
  };

  const handleCardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/\D/g, '');

    if (inputValue.length <= 16) {
      setValueCard(inputValue);
    }
  };

  return (
    <div className="overlay">
      <form className="form-popup">
        <button className='exit-button' type='button' onClick={() => setFormState(false)}>Exit</button>
        
        <p className='ticket-info-text'>For payment: <b>{money}$</b></p>
        <p className='ticket-info-text'>Number of tickets: <b>{tickets}</b></p>
        <p className='ticket-info-text'>Date: <b>{formattedDate}</b></p>
        <h2 className='form-title'>Express Checkout</h2>

        <div className='inputs-wrapper'>
          <input className='form-input' type="email" placeholder='Email*' required/>
          <input className='form-input' type="text" placeholder='Phone number*' value={valueTel} onChange={handleTelChange} required/>
        </div>

        <div className='inputs-wrapper'>
          <input className='form-input' type="text" placeholder='First name*' required/>
          <input className='form-input' type="text" placeholder='Last name*' required/>
        </div>

        <h2 className='form-title'>Choose your payment method</h2>
        <div className='inputs-wrapper'>
          <input className='form-input full-input' type="text" placeholder='Credit/Debit Card Number' value={valueCard} onChange={handleCardChange} required/>
        </div>

        <div className='inputs-wrapper last-inputs-wrapper'>
          <input className='form-input' type="text" placeholder='Expiry Date*' id="cardData" value={cardData} onChange={handleCardDataChange} maxLength={5} required/>
          <input className='form-input' type="text" placeholder='CVV' maxLength={3} required/>
        </div>

        <button type='submit' className='buy-ticket-button'>Pay</button>
      </form>
    </div>
  );
};

export default FormPopup;