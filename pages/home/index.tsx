import Menu from "../../components/menu";
import ProductsContainer from "../../container/products";

type HomePageProps = {}
 
const HomePage:React.FC<HomePageProps> = () => {
    return (
        <div>
       <Menu/>
      <div className="wrapper"> <ProductsContainer style={{transform: 'translateY(-100px)'}}/></div>
        </div>
    );
}
 
 
export default HomePage;