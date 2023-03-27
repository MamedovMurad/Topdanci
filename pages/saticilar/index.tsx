import { useEffect, useState } from "react";
import Menu from "../../components/menu";
import ProductsContainer from "../../container/products";
import { api } from "../../common/api";
import ProductCard from "../../components/card/product";

type SaticiPageProps = {}

const Satici: React.FC<SaticiPageProps> = () => {
    const [products, setproducts] = useState([])
    async function fetchProducts() {
        const response = await api.get('adverts?advert_type=0')
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
    }, [])
    return (
        <div>
            <Menu />
            <div className="wrapper"> <ProductsContainer seletedUrl="/saticilar" title="Satıcılar" isproduct style={{ transform: 'translateY(-100px)' }} list={products} /></div>
        </div>
    );
}


export default Satici;