import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import { api } from '../../../common/api';
import ProductCard from '../../../components/card/product';
import EmptyAdverts from '../../../components/empty-adverts';
interface AdvertsProps {

}

const Adverts: React.FC<AdvertsProps> = ({ }) => {
    const [link, setlink] = useState('active')
    const [data, setdata] = useState<any>({ active: [], pending: [], rejected: [], expired: [] })
    const links = [
        { title: 'Aktiv', count: 0, id: 'active' },
        { title: 'Gözləmədə olan', count: 0, id: 'pending' },
        { title: 'Dərc olunmamış', count: 0, id: 'rejected' },
        { title: 'Müddəti bitmiş', count: 0, id: 'expired' }]

    async function fetchData(params: string, object: string) {
        const response = await api.get(params)
        setdata({ ...data, [object]: response.data.adverts })
    }
    useEffect(() => {
        fetchData('user/expired-adverts', 'expired')
        fetchData('user/pending-adverts', 'pending')
        fetchData('user/rejected-adverts', 'rejected')
        fetchData('user/active-adverts', 'active')
    }, [])

    return (
        <div className={styles.adverts}>
            <ul className={styles.links}>
                {links.map(item => (
                    <li key={item.title} onClick={() => setlink(item.id)}
                        style={item.id === link ? { color: '#E61C23' } : {}}>{item.title + ' (' + item.count + ')'}</li>
                ))}
            </ul>
        <main className={styles.advertsMain}>
        {!data[link].length &&<EmptyAdverts title={links.find((item)=>item.id===link)?.title.toLocaleLowerCase()||'aktiv'}/>}
            {
                data[link].map((item: any) => (
                    <ProductCard key={item.id} data={{
                        id: item.id,
                        title: item.title,
                        address: "Bakı",
                        minNumber: item.min_order,
                        price: item.wholesale_price,
                        date: item.date,
                        photo: item.image?.src,
                        label: item.advert_type ? "buyer" : 'seller',
                        type: "premium"
                    }} />
                ))
            }
        </main>
         

        </div>
    );
};

export default Adverts;