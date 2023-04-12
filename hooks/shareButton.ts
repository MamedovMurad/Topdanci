import { useState, useEffect } from 'react';

export const ShareButton = ({ title, text, url }:any) => {
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if ('share' in navigator) {
  
      setIsSupported(true);
    }
  }, []);

  const handleClick = () => {
    console.log('sdfdsfs');
    
    if (navigator.share) {
      navigator.share({
        title,
        text,
        url,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
    }
  };

  return {isSupported,handleClick};
};
