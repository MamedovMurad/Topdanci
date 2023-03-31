import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import { api } from '../../../common/api';
import ProductCard from '../../../components/card/product';
import EmptyAdverts from '../../../components/empty-adverts';
import ProductsContainer from '../../products';
interface AdvertsProps {

}

const Adverts: React.FC<AdvertsProps> = ({ }) => {
    const [link, setlink] = useState('active')
    const [data, setdata] = useState<any>({ active: null, pending: null, rejected: null, expired: null })
    const links = [
        { title: 'Aktiv', count: 0, id: 'active' },
        { title: 'Gözləmədə olan', count: 0, id: 'pending' },
        { title: 'Dərc olunmamış', count: 0, id: 'rejected' },
        { title: 'Müddəti bitmiş', count: 0, id: 'expired' }]

    async function fetchData(params: string, object: string) {
        const response = await api.get(params)
        setdata((prev: any) => {
            return {
                ...prev, [object]: response.data.adverts.map((item: any) => <ProductCard key={item.id} data={{
                    id: item.id,
                    title: item.title,
                    address: "Bakı",
                    minNumber: item.min_order,
                    price: item.wholesale_price,
                    date: item.date,
                    photo: item.image?.src,
                    label: item.advert_type ? "buyer" : 'seller',
                    type: "premium"
                }} />)
            }
        })
    }
    useEffect(() => {
        fetchData('user/expired-adverts', 'expired')
        fetchData('user/pending-adverts', 'pending')
        fetchData('user/rejected-adverts', 'rejected')
        fetchData('user/active-adverts', 'active')
    }, [])
    console.log(data);

    return (
        <div className={styles.adverts}>

            <ul className={styles.links}>
                {links.map(item => (
                    <li key={item.title} onClick={() => setlink(item.id)}
                        style={item.id === link ? { color: '#E61C23' } : {}}>{item.title + ' (' + (data[item.id]?.length || 0) + ')'}</li>
                ))}
            </ul>
            <main className={styles.advertsMain}>
                {data[link]?.length < 1 && <EmptyAdverts title={links.find((item) => item.id === link)?.title.toLocaleLowerCase() || 'aktiv'} />}
                {
                    <ProductsContainer list={data[link]} />

                }
            </main>


        </div>
    );
};

export default Adverts;