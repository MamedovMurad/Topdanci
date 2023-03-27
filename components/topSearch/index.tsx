import { useEffect, useState } from "react";
import { SearchIconSvg } from "../../assets/svg/searchIcon";
import ReactSelectUI from "../r-select";
import MegaMenuUI from "../UI/megamenu";
import styles from "./index.module.css";
import { api } from "../../common/api";
import { useRouter } from "next/router";
type TopSearchProps = {};

const TopSearch: React.FC<TopSearchProps> = () => {
  const [cities, setcities] = useState([])
  const [text, setText] = useState<null|string>(null)
  const [city, setcity] = useState<null|string>(null)
  const router = useRouter()
  async function fetchcity() {
    const res = await api.get('cities')
    setcities(res.data)
  }
  useEffect(() => {
    fetchcity()
  }, [])
  
  async function handleSubmit(event:any) {
    event.preventDefault()
  
  
      router.query.city=city||''
    

      router.query.search_text=text||''
   
    
    router.push({pathname:'/', query: { ...router.query }})
  }
  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <div>
        <input type="text" placeholder="Topdan məhsul axtarışı" onChange={(even:any)=>setText(even.target.value)} />
        <div className={styles.select}>
       {/*    <ReactSelectUI width="100%" /> */}
       <MegaMenuUI cities={cities} CB={setcity}/>
        </div>
        <button>
          <SearchIconSvg width={"18px"} />
        </button>
      </div>
    </form>
  );
};

export default TopSearch;
