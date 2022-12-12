import Menu from "../../components/menu";
import ProductsContainer from "../../container/products";

type HomePageProps = {}
 
const HomePage:React.FC<HomePageProps> = () => {
    return (
        <div>
       <Menu/>
       <ProductsContainer/>
        </div>
    );
}
 
 
export default HomePage;