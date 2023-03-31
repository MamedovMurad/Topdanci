import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';
interface CompanyItemProps {
    title: string,
    src: string,
    slogan: string,
    tel:string,
    count:number,
}

const CompanyItem: React.FC<CompanyItemProps> = ({ title, src, slogan,tel,count }) => {
    return (
        <div className={styles.companyitem}>
            <div className={styles.logo}>
                <Image
                    src={src}
                    alt={title}
                    layout="fill"
                />
            </div>
            <div className={styles.content}>
                <h5>{title}</h5>
                <p>
                    {slogan} </p>
                <a href={"tel:"+tel}>{tel}</a>

                <div>
                    <span>{count} Elan</span>
                </div>
            </div>
        </div>
    );
};

export default CompanyItem;