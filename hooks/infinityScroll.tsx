import { useEffect, useState } from 'react';

function useInfiniteScroll(callback:any) {
  const [isFetching, setIsFetching] = useState(false);
  const [number, setnumber] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
   
    if (!isFetching) return;

    callback(() => {
        console.log('fasdfasdfds dnnnnn');
        
      setIsFetching(false);
    });
  }, [isFetching]);

  function handleScroll() {

    console.log( Math.round(window.innerHeight+document.documentElement.scrollTop) ,
        document.documentElement.offsetHeight);
    
    if (
      Math.round(window.innerHeight+document.documentElement.scrollTop) !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
      console.log(number,'lll');
      
    setnumber(prev=>prev+1)

  /*   setIsFetching(true); */
  }

  return [isFetching,number, setIsFetching] as const;
}

export default useInfiniteScroll;
