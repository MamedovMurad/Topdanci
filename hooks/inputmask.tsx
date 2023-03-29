import { useState } from 'react';

export const usePhoneInput = () => {
  const [tel, settel] = useState<string>('(0');
  console.log(tel);
  function handleSetTelAll(event:string) {

    
    const value = event;
    const digitsOnly = value.replaceAll(/\D/g, '');
    const formatted = `(${digitsOnly.slice(0, 3)})-${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6, 8)}-${digitsOnly.slice(8, 10)}`;
    settel(formatted.slice(0, 15));
  }
   function handlesetTel(event: any) {



        if (
            (Number(event.target.value.replace('(', '').replace(')', '').replaceAll('-', '')) ||
             Number(event.target.value.replace('(', '').replace(')', '').replaceAll('-', '')) == 0) &&
            event.target.value.replace('(', '').replace(')', '').replaceAll('-', '').length < 11) {
      
                
            if (event.target.value.length > 1) {
                settel(event.target.value)
            }
            if (event.target.value.length === 4 && tel[4] !== ')') {
                
                
                settel(event.target.value + ')-')

            }
            console.log(tel);
            if((event.target.value.length === 9 && tel[9] !== '-')||
            (event.target.value.length === 12 && tel[12] !== '-')){
              
                settel(event.target.value + '-')
            }
            

        } 
    }

  return [tel, handlesetTel, handleSetTelAll] as const;
};