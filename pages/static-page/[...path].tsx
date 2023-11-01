import React from 'react';
import {useRouter} from "next/router";
import styles from './index.module.css'
import Link from "next/link";

const StaticPage = () => {
    const router = useRouter();

    return (
        <div className={'wrapper'}>
            <div className={styles.pageWrapper}>
                <div className={styles.sidebar}>
                    <ul>
                        <li><Link href={'/about-project'}>Layihə haqqında</Link></li>
                        <li><Link href={'/rules'}>Qaydalar</Link></li>
                        <li><Link href={'/advertising'}>Saytda reklam</Link></li>
                        <li><Link href={'/paid-services'}>Ödənişli xidmətlər</Link></li>
                        <li><Link href={'/packages'}>Paketlər</Link></li>
                        <li><Link href={'/terms-and-conditions'}>İstifadəçi razılaşması</Link></li>
                        <li><Link href={'/help'}>Ən çox soruşulan suallar</Link></li>
                    </ul>
                </div>
                <div className={styles.content}>
                    lorem
                </div>
            </div>
        </div>
    );
};

export default StaticPage;