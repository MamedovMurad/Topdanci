
import { ArrowSVG } from '../../../assets/svg/Arrow';
import { LocationSVG } from '../../../assets/svg/location';
import styles from './index.module.css'
type MegaMenuProps = {}
 
const MegaMenuUI:React.FC<MegaMenuProps> = () => {
    return (
        <div className={styles.MegaMenu}>
            <label ><span>Şəhər</span> <LocationSVG/> <ArrowSVG/></label>
            <div className={styles.content}>
                <ul>
                    <li>Baki</li>
                    <li>Ağcabedi</li>
                    <li>Ağdam </li>
                    <li>Ağdaş</li>
                    <li>Yevlax</li>
                    <li>Tovuz</li>
                    <li>Saatli</li>
                    <li>Sabirabad</li>
                    <li>Goranboy</li>
                    <li>Aqstafa</li>
                    <li>Baki</li>
                    <li>Ağcabedi</li>
                    <li>Ağdam </li>
                    <li>Ağdaş</li>
                    <li>Yevlax</li>
                    <li>Tovuz</li>
                    <li>Saatli</li>
                    <li>Sabirabad</li>
                    <li>Goranboy</li>
                    <li>Aqstafa</li>
                    <li>Baki</li>
                    <li>Ağcabedi</li>
                    <li>Ağdam </li>
                    <li>Ağdaş</li>
                    <li>Yevlax</li>
                    <li>Tovuz</li>
                    <li>Saatli</li>
                    <li>Sabirabad</li>
                    <li>Goranboy</li>
                    <li>Aqstafa</li>
                    <li>Baki</li>
                    <li>Ağcabedi</li>
                    <li>Ağdam </li>
                    <li>Ağdaş</li>
                    <li>Yevlax</li>
                    <li>Tovuz</li>
                    <li>Saatli</li>
                    <li>Sabirabad</li>
                    <li>Goranboy</li>
                    <li>Aqstafa</li>
                  
                </ul>
            </div>
        </div>
    );
}
 
 
export default MegaMenuUI;