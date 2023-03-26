
import { ArrowSVG } from '../../../assets/svg/Arrow';
import { LocationSVG } from '../../../assets/svg/location';
import styles from './index.module.css'
type MegaMenuProps = {
    cities:any
}
 
const MegaMenuUI:React.FC<MegaMenuProps> = ({cities}) => {
    return (
        <div className={styles.MegaMenu}>
            <label ><span>Şəhər</span> <LocationSVG/> <ArrowSVG/></label>
            <div className={styles.content}>
                <ul>
                   {cities?.map((item:any)=>(
                    <li key={item.id}>{item.name}</li>
                   ))}
                  <li>fsffs</li>
                  <li>fsdfsdfsd</li>
                  <li>fsfsd</li>
                </ul>
            </div>
        </div>
    );
}
 
 
export default MegaMenuUI;