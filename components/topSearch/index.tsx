import { useEffect, useState } from "react";
import { SearchIconSvg } from "../../assets/svg/searchIcon";
import ReactSelectUI from "../r-select";
import MegaMenuUI from "../UI/megamenu";
import styles from "./index.module.css";
import { api } from "../../common/api";
type TopSearchProps = {};

const TopSearch: React.FC<TopSearchProps> = () => {
  const [cities, setcities] = useState([])

  async function fetchcity() {
    const res = await api.get('cities')
    setcities(res.data)
  }
  useEffect(() => {
    fetchcity()
  }, [])
  
  return (
    <form className={styles.search}>
      <div>
        <input type="text" placeholder="Topdan məhsul axtarışı" />
        <div className={styles.select}>
       {/*    <ReactSelectUI width="100%" /> */}
       <MegaMenuUI cities={cities}/>
        </div>
        <button>
          <SearchIconSvg width={"18px"} />
        </button>
      </div>
    </form>
  );
};

export default TopSearch;
