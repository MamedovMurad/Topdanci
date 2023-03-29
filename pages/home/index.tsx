import { useEffect, useState } from "react";
import Menu from "../../components/menu";
import ProductsContainer from "../../container/products";
import { api } from "../../common/api";
import ProductCard from "../../components/card/product";
import { useRouter } from "next/router";

type HomePageProps = {}

const HomePage: React.FC<HomePageProps> = () => {
    const router = useRouter()

    const [products, setproducts] = useState([])
    async function fetchProducts() {
        const response = await api.get('adverts?search_text='+(router.query.search_text||'')+'&city='+(router.query.city||''))
        setproducts(response.data.adverts.map((item: any, index: number) => (
            <ProductCard
                key={index}
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
    useEffect(() => {
        fetchProducts()
    }, [router.query])
    return (
        <div>
            <Menu />
            <div className="wrapper"> <ProductsContainer title="Premium elanlar" isproduct style={{ transform: 'translateY(-100px)' }} list={products} /></div>
        </div>
    );
}


export default HomePage;