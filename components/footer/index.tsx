import styles from "./index.module.css";
import Facebook from '../../assets/svg/Facebook.svg';
import Instagram from '../../assets/svg/Instagram.svg';
import Linkedin from '../../assets/svg/Linkedin.svg';
import Youtube from '../../assets/svg/Youtube.svg';
import Image from "next/image";
type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className={styles.footer+' wrapper'}>
            <ul>
                <li>
                    <b>Topdanci.az</b>
                    <ul>
                        <li>
                            <a href="">Layihə haqqında</a>
                        </li>
                        <li><a href="">Qaydalar</a></li>
                        <li>
                            <a href="">İstifadəçi razılaşması</a>
                        </li>
                        <li><a href="">Ən çox soruşulan suallar</a></li>
                        <li><a href="">Dəstək</a></li>
                        <li><a href="">Məxfilik siyasəti</a></li>
                    </ul>
                </li>
                <li>
                    <b>Reklam</b>
                    <ul>
                        <li>
                            <a href="">Saytda reklam</a>
                        </li>
                        <li><a href="">Ödənişli xidmətlər</a></li>
                        <li>
                            <a href="">Paketlər</a>
                        </li>

                    </ul>
                </li>
                <li>
                    <b>Özəl kateqoriyalar</b>
                    <ul>
                        <li>
                            <a href="">İnşaat</a>
                        </li>
                        <li><a href="">Elektironika</a></li>
                        <li>
                            <a href="">Geyim</a>
                        </li>
                        <li>
                            <a href="">Kənd təsərüfatı</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <b>Əlaqə</b>
                    <ul>
                        <li>
                            <Image src={Facebook} alt={'Facebook'}/><a href="">Facebook</a>
                        </li>
                        <li>
                            <Image src={Instagram} alt={'Instagram'}/><a href="">Instagram</a></li>
                        <li>
                            <Image src={Linkedin} alt={'Linkedin'}/> <a href="">Linkedin</a>
                        </li>
                        <li>
                            <Image src={Youtube} alt={'Youtube'}/> <a href="">Youtube</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
