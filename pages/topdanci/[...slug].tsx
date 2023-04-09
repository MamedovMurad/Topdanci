import React ,{useState,useEffect}from 'react';
import styles from './index.module.css';
import { WholesaleDetail } from '../../common/model/wholesale';
import { api } from '../../common/api';
import { TelIconSVG } from '../../assets/svg/tel';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductsContainer from '../../container/products';
import ProductCard from '../../components/card/product';
import SpinnerLoader from '../../components/loader/spinner';

interface TopdanciProps {
  data: WholesaleDetail&{slug:string}
}

const Topdanci: React.FC<TopdanciProps> = ({ data }) => {
  const [hasmore, sethasmore] = useState(false)
  const [end, setend] = useState(false)
  const [page, setpage] = useState(1)
  const [products, setproducts] = useState<any>(null)
  console.log(products,'products');
  async function fetchProducts(param?: boolean) {
    
    sethasmore(false)

    const response = await api.get(`wholesaler/${data.slug}?page=` + page)


    if (response.data.adverts.adverts.length < 1 && page >= 2 && !param) {
        sethasmore(false)
        setend(true)
        return;
    }

        response.data.adverts.adverts.length && setpage(prev => prev + 1)
        sethasmore(true)
        setproducts([...products, response.data.adverts.adverts.map((item: any, index: number) => (
            <ProductCard
                key={item.id}
                data={{
                    id: item.id,
                    title: item.title,
                    address: item.city,
                    minNumber: item.min_order,
                    price: item.wholesale_price,
                    date: item.date,
                    photo: item.image?.src,
                    label: item.advert_type ? "buyer" : 'seller',
                    type: "premium"
                }}
            />
        ))])


    


}

function handleScrollToBottom() {
    setpage(prev => prev + 1)
    sethasmore(true)
    setTimeout(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }, 100);
}

  useEffect(() => {
    setproducts( data.adverts.adverts?.map((item: any, index: number) => (
      <ProductCard
          key={item.id}
          data={{
              id: item.id,
              title: item.title,
              address: item.city,
              minNumber: item.min_order,
              price: item.wholesale_price,
              date: item.date,
              photo: item.image?.src,
              label: item.advert_type ? "buyer" : 'seller',
              type: "premium"
          }}
      />
  )))

    
  }, [])
  
  return (
    <div className={styles.topdanci}>
      <div className={styles.banner}>

      </div>

      <div className="wrapper">
        <main>
          <h4>Topdançılar/EFOR MMC</h4>
          <div className={styles.bgImage}></div>
        </main>
        <section className={styles.topSection}>
          <div className={styles.leftBox}>
            <div className={styles.logoarea}><img src={data.logo} alt="photo" /></div>
            <div className={styles.content}><h5>EFOR MMC</h5>
              <p>What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard </p>

              <div className={styles.leftboxBottom}>
                <article>Sloqan</article>
                <article>{data.slogan}</article>
              </div>

            </div>
          </div>
          <div className={styles.rightBox}>
            <div className={styles.address}>
              <span><TelIconSVG width={19} height={19} /></span>
              <p> Bakı şəh.Mikayıl Rəfili 39</p>
            </div>

            <div className={styles.rightTelArea}>
              <span><TelIconSVG width={19} height={19} /></span>
              <div>
                <a href="">055 973 63 13</a>
                <a href="">055 973 63 13</a>
              </div>
            </div>
            <div className={styles.rightBottom}>
              <p>Pərakəndə satış mümkündür</p>
              <div>
                <span className={styles.active}>Bəli</span>
                <span>Xeyr</span>
              </div>
            </div>
          </div>
        </section>
      <div className={styles.time}>
      <p>Hər gün /8:00-19:00</p>
      <label>52 Elan</label>
      </div>



      <InfiniteScroll
                    dataLength={products?.length || 1}
                    next={fetchProducts}
                    hasMore={hasmore}
                    loader={<SpinnerLoader />}
                    style={{ transform: 'translateY(-80px)' }}


                >
                    <div> <ProductsContainer title="Elanlar"  list={products} isNotTop={!end} onClick={handleScrollToBottom} /></div>
                </InfiniteScroll>
      </div>
    </div>
  );
};

export default Topdanci;


export async function getServerSideProps({ params: { slug } }: any) {
  // Fetch data from external API


  const res = await api.get('wholesaler/' + slug[slug.length - 1])



  // Pass data to the page via props
  return { props: { data: {...res.data, slug:slug[slug.length - 1]} } }
}