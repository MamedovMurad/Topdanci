import { useState } from 'react';

export const usePhoneInput = () => {
  const [phone, setPhone] = useState('');

  const handlePhoneChange:any = (event:any):any => {
    const inputValue = event.target.value;
    const inputLength = inputValue.length;
    let formattedPhone = '';

    if (inputLength < 2) {
      formattedPhone = `(${inputValue}`;
    } else if (inputLength < 5) {
      formattedPhone = `(${inputValue.slice(0, 2)})-${inputValue.slice(2)}`;
    } else if (inputLength < 8) {
      formattedPhone = `(${inputValue.slice(0, 2)})-${inputValue.slice(2, 5)}-${inputValue.slice(5)}`;
    } else {
      formattedPhone = `(${inputValue.slice(0, 2)})-${inputValue.slice(2, 5)}-${inputValue.slice(5, 7)}-${inputValue.slice(7)}`;
    }

    setPhone(formattedPhone);
  };

  return [phone, handlePhoneChange];
};