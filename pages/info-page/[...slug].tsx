import React, { useEffect, useState } from "react";
import { api } from "../../common/api";
import styles from "./style.module.css";
import Link from "next/link";
interface Props {
  res: any;
  id: string;
}

const InfoPage: React.FC<Props> = ({ res, id }) => {
  console.log(id);

  const [list, setlist] = useState([]);
  const fetchApi = async () => {
    const res = await api.get("info-pages");
    res && setlist(res.data);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <section className={styles.InfoPage}>
      <div className="wrapper">
        <aside>
          <ul>
            {list.map((item: any) => (
              <li key={item.id}>
                <Link
                  href={"/info-page/" + item.slug + "/" + item.id}
                  className={item.id == id ? styles.active : ""}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <div>
          <div>
            <h2>{res.data.title}</h2>
            <p>{res.data.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoPage;

export async function getServerSideProps({ params: { slug } }: any) {
  // Fetch data from external API

  const res = await api.get("info-page/" + slug[slug.length - 1]);
  console.log(res);
  // Pass data to the page via props
  return { props: { res, id: slug[slug.length - 1] } };
}
