import React from 'react';
import styles from './index.module.css';
import PrimaryButton from '../UI/button';
import Router from 'next/router';
interface EmptyAdvertsProps {
    title: string,
    selectable?: 'defaultItem' | 'action',
}

const EmptyAdverts: React.FC<EmptyAdvertsProps> = ({ title, selectable = 'defaultItem' }) => {
    const item = {
        defaultItem: <div>
            <p>Hazırda {title} elanınız yoxdur</p>
            <PrimaryButton text='YENİ ELAN' onClick={() => Router.push('/yeni-elan')} />
        </div>,
        action: <div><p>Hal-hazırda sizin əməliyyatınız yoxdur. <br />
            Burada sizin şəxsi hesab üzrə əməliyyat <br />
            tarixçəniz göstəriləcək</p></div>
    }[selectable]
    return (
        <main className={styles.emptyAdvertsMain}>

            {item}
        </main>
    );
};

export default EmptyAdverts;