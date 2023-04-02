
import { useState } from 'react';
import { ArrowSVG } from '../../../assets/svg/Arrow';
import { LocationSVG } from '../../../assets/svg/location';
import styles from './index.module.css'
type MegaMenuProps = {
    cities: any,
    CB: any
}

const MegaMenuUI: React.FC<MegaMenuProps> = ({ cities, CB }) => {
    const [city, setcity] = useState('Şəhər')
    function handleclick(param: { id: number, city: string }) {
        CB(param.id)
        setcity(param.city)
    }
    return (
        <div className={styles.MegaMenu}>
            <label ><span>{city}</span> <LocationSVG /> <ArrowSVG /></label>
            <div className={styles.content}>
                <ul>
                    {cities?.map((item: any) => (
                        <li key={item.id} onClick={() => handleclick({ id: item.id, city: item.name })}>{item.name}</li>
                    ))}

                </ul>
            </div>
        </div>
    );
}


export default MegaMenuUI;