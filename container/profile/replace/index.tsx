import React from 'react';
import styles from './index.module.css';
interface ProfileReplaceProps {
  
}

const ProfileReplace: React.FC<ProfileReplaceProps> = ({ }) => {
  return (
    <section className={styles.replace}> 
        <h4>Düzəliş et</h4>

        <form action="">
            <div>
                <label htmlFor="">Adınız <span>*</span></label>
                <input type="text" placeholder='Əli' />
            </div>
            <div>
                <label htmlFor="">E-mail <span>*</span></label>
                <input type="text" placeholder='Əli' />
            </div>
            <div>
                <label htmlFor="">Mobil nömrə <span>*</span></label>
                <input type="text" placeholder='Əli' />
            </div>
         <div>   <button>Yadda saxla</button></div>
        </form>
    </section>
  );
};

export default ProfileReplace;