import React from 'react';
import styles from './index.module.css';
import ProductsContainer from '../../container/products';
import CompanyItem from '../../components/companyItem';
interface TopdancilarProps {

}

const Topdancilar: React.FC<TopdancilarProps> = ({ }) => {
    return (
        <section className={styles.topdanci}>
            <div className={styles.banner}></div>
            <div className="wrapper"> <ProductsContainer style={{ transform: 'translateY(-100px)' }} list={[<CompanyItem key={1} src='http://api.artelie.az/uploads/1.jpg' title='lll' />, <CompanyItem key={2} src='http://api.artelie.az/uploads/1.jpg' title='lll' />]} title='Topdançılar' /></div>
        </section>
    );
};

export default Topdancilar;