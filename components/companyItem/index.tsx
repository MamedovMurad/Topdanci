import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import Router from 'next/router';
import { MyComponent } from '../../hooks/useResponsivenenessAdjuster';
interface CompanyItemProps {
    title: string,
    src: string,
    desc: string,
    tel:string,
    count:number,
    id:number
}

const CompanyItem: React.FC<CompanyItemProps> = ({ title, src, desc,tel,count,id }) => {
    const responsive  = MyComponent()
    return (
        <div className={styles.companyitem} onClick={()=>Router.push('/topdanci/'+id)}>
            <div className={styles.logo}>
                <Image
                    src={src}
                    alt={title}
                   fill
                />
            </div>
            <div className={styles.content  }>
                <h5>{title}</h5>
                <p>
                    {responsive<900?desc.slice(0,60)   :desc} </p>
                <a href={"tel:"+tel}>{tel}</a>

                <div>
                    <span>{count} Elan</span>
                </div>
            </div>
        </div>
    );
};

export default CompanyItem;