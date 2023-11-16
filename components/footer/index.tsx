import styles from "./index.module.css";
import Facebook from "../../assets/svg/Facebook.svg";
import Instagram from "../../assets/svg/Instagram.svg";
import Linkedin from "../../assets/svg/Linkedin.svg";
import Youtube from "../../assets/svg/Youtube.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { api } from "../../common/api";
import Link from "next/link";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const [list, setlist] = useState([]);
  const fetchApi = async () => {
    const res = await api.get("info-pages");
    res && setlist(res.data);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <footer className={styles.footer + " wrapper"}>
      <ul>
        <li>
          <b>Topdanci.az</b>
          <ul>
            {list.map((item: any, index) => (
              <li key={index}>
                <Link href={"/info-page/" + item.slug + "/" + item.id}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <b>Reklam</b>
          <ul>
            <li>
              <a href="">Saytda reklam</a>
            </li>
            <li>
              <a href="">Ödənişli xidmətlər</a>
            </li>
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
            <li>
              <a href="">Elektironika</a>
            </li>
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
              <Image src={Facebook} alt={"Facebook"} />
              <a href="">Facebook</a>
            </li>
            <li>
              <Image src={Instagram} alt={"Instagram"} />
              <a href="">Instagram</a>
            </li>
            <li>
              <Image src={Linkedin} alt={"Linkedin"} /> <a href="">Linkedin</a>
            </li>
            <li>
              <Image src={Youtube} alt={"Youtube"} /> <a href="">Youtube</a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
