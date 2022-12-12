import { SearchIconSvg } from "../../assets/svg/searchIcon";
import ReactSelectUI from "../r-select";
import styles from "./index.module.css";
type TopSearchProps = {};

const TopSearch: React.FC<TopSearchProps> = () => {
  return (
    <form className={styles.search}>
      <div>
        <input type="text" placeholder="Topdan məhsul axtarışı"/>
        <div className={styles.select}><ReactSelectUI width="100%"/></div>
        <button><SearchIconSvg width={'18px'}/></button>
      </div>
    </form>
  );
};

export default TopSearch;
