import { Link } from "react-router-dom";
import style from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar";




const NavBar = () => {
  return (
    <div className={style.mainContainer}>
      <SearchBar />
      <Link to='/home' className={style.link}>HOME</Link>
      <Link to='/create' className={style.link}>CREATE</Link>
    </div>
  )
}


export default NavBar;
