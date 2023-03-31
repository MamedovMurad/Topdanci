import React from 'react';
import styles from './index.module.css';
import PrimaryButton from '../UI/button';
import  Router  from 'next/router';
interface EmptyAdvertsProps {
  title:string
}

const EmptyAdverts: React.FC<EmptyAdvertsProps> = ({title }) => {
  return (
    <main className={styles.emptyAdvertsMain}> 
            
        <div>
        <p>Hazırda {title} elanınız yoxdur</p>
        <PrimaryButton text='YENİ ELAN' onClick={()=>Router.push('/yeni-elan')}/>
        </div>
    </main>
  );
};

export default EmptyAdverts;