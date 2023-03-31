import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import ProductsContainer from '../../container/products';
import CompanyItem from '../../components/companyItem';
import { api } from '../../common/api';
interface TopdancilarProps {

}

const Topdancilar: React.FC<TopdancilarProps> = ({ }) => {
    const [data, setdata] = useState(null)
    async function fetchApi() {
        const res = await api.get('wholesalers')
        setdata(res.data.data.map((item: any) => <CompanyItem key={item.id} title={item.title} src={item.logo}
        desc={item.summary} tel={item.tel} count={item.adverts_count} />))
    }
    useEffect(() => {
        fetchApi()

    }, [])

    return (
        <section className={styles.topdanci}>
            <div className={styles.banner}></div>
            <div className="wrapper"> <ProductsContainer style={{ transform: 'translateY(-100px)' }}
                list={data} title='Topdançılar' /></div>
        </section>
    );
};

export default Topdancilar;