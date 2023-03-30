import { useEffect, useState } from "react";
import Menu from "../../components/menu";
import ProductsContainer from "../../container/products";
import { api } from "../../common/api";
import ProductCard from "../../components/card/product";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";
import SpinnerLoader from "../../components/loader/spinner";
type HomePageProps = {}

const HomePage: React.FC<HomePageProps> = () => {
    const router = useRouter()

    const [products, setproducts] = useState<any>(null)
    const [premiumProducts, setpremiumProducts] = useState<any>(null)
    const [hasmore, sethasmore] = useState(false)
    const [end, setend] = useState(false)
    const [page, setpage] = useState(1)
    async function fetchPremiumProducts() {
        const response = await api.get('adverts?premium=1&search_text=' + (router.query.search_text || '') + '&city=' + (router.query.city || ''))
        setpremiumProducts(response.data.adverts.map((item: any, index: number) => (
            <ProductCard
                key={item.id}
                data={{
                    id: item.id,
                    title: item.title,
                    address: "Bakı",
                    minNumber: item.min_order,
                    price: item.wholesale_price,
                    date: item.date,
                    photo: item.image?.src,
                    label: item.advert_type ? "buyer" : 'seller',
                    type: "premium"
                }}
            />
        )))
        console.log(response);
    }

    async function fetchProducts() {
        const response = await api.get('adverts?page=' + page + '&search_text=' + (router.query.search_text || '') + '&city=' + (router.query.city || ''))
        response.data.adverts.length && setpage(prev => prev + 1)
        response.data.adverts.length < 1 && sethasmore(false)
        response.data.adverts.length < 1 && setend(true)
        if (page < 2) {
            setproducts(response.data.adverts.map((item: any, index: number) => (
                <ProductCard
                    key={item.id}
                    data={{
                        id: item.id,
                        title: item.title,
                        address: "Bakı",
                        minNumber: item.min_order,
                        price: item.wholesale_price,
                        date: item.date,
                        photo: item.image?.src,
                        label: item.advert_type ? "buyer" : 'seller',
                        type: "premium"
                    }}
                />
            )))
        }
        else {

            setproducts([...products, response.data.adverts.map((item: any, index: number) => (
                <ProductCard
                    key={item.id}
                    data={{
                        id: item.id,
                        title: item.title,
                        address: "Bakı",
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

        console.log(response);
    }

    function handleScrollToBottom() {

        sethasmore(true)
        setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight + 6000,
                behavior: 'smooth'
            });
        }, 100);
    }

    useEffect(() => {
        fetchPremiumProducts()
        fetchProducts()
    }, [router.query])
    return (
        <div>

            <Menu />
            <div className="wrapper">
                <ProductsContainer title="Premium elanlar" isproduct style={{ transform: 'translateY(-100px)' }} list={premiumProducts} />









                <InfiniteScroll
                    dataLength={products?.length || 1}
                    next={fetchProducts}
                    hasMore={hasmore}
                    loader={<SpinnerLoader />}
                    style={{ transform: 'translateY(-100px)' }}

                >
                    <ProductsContainer title="Son elanlar" isproduct list={products} isNotTop={!end} onClick={handleScrollToBottom} />
                </InfiniteScroll>


            </div>
        </div>
    );
}


export default HomePage;