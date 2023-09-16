import { useEffect } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer"
import { useDispatch, useSelector } from "react-redux";
import style from "./Home.module.css"
import {
  getAllDogs, setRazeOrder, setRazeOrderByWeight,
  setTempFilter, setOriginFilter, getTemperaments,
} from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.allTemperaments);

  
  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTemperaments());
  }, [dispatch]);


  const handleOrder = (e) => {
    dispatch(setRazeOrder(e.target.value));
  };

  const handleOrderByWeight = (e) => {
    dispatch(setRazeOrderByWeight(e.target.value));
  };

  const handleFilterByTemp = (e) => {
    dispatch(setTempFilter(e.target.value));
  };

  const handleFilterByOrigin = (e) => {
    dispatch(setOriginFilter(e.target.value));
  };

  // Ordenar alfabéticamente la lista de temperamentos
  const sortedTemperaments = temperaments.slice().sort((a, b) =>
    a.nombre.localeCompare(b.nombre)
  );

  return (
    <div className={style.container}>
      <div className={style.container}>
        <select onChange={handleOrder} >
          <option value="">ALPH. ORDER</option>
          <option value="A">A-Z</option>
          <option value="D">Z-A</option>
        </select>

        <select onChange={handleOrderByWeight}>
          <option value="">ORDER BY WEIGHT</option>
          <option value="A">Asc</option>
          <option value="D">Des</option>
        </select>

        <select onChange={handleFilterByTemp}>
          <option value="All">TEMPERAMENTS</option>
          <option value="All">All</option>
           {sortedTemperaments.map((temp) => (
            <option key={temp.id} value={temp.nombre}>
              {temp.nombre}
            </option>
          ))}
        </select>

        <select onChange={handleFilterByOrigin}>
        <option value="ALL">SOURCE</option>
          <option value="ALL">ALL</option>
          <option value="BDD">BDD</option>
          <option value="API">API</option>
        </select>
      </div>

      <h1 className={style.titulo}>DOGS HOME</h1>
      <CardsContainer />
    </div>
  );
}

export default Home;
