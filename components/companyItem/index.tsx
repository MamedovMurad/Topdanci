import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';
interface CompanyItemProps {
    title: string,
    src: string
}

const CompanyItem: React.FC<CompanyItemProps> = ({ title, src }) => {
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
                <h5>EFOR MMC</h5>
                <p>What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry/s standard </p>
                   <a href="tel:055 973 63 13">055 973 63 13</a>

                   <div>
                    <span>155 Elan</span>
                   </div>
            </div>
        </div>
    );
};

export default CompanyItem;