import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, nombre, imagen, peso, temperamentos } = props;

  return (
    <Link to={`/detail/${id}`} className={style.cardLink}>
      <div className={style.card}>
        <p className={style.nombre}>{nombre}</p>
        <img src={imagen} alt="Imagen" />
        <p>Peso: {peso} kgs.</p>
        <p>Temperamentos: {temperamentos}</p>
      </div>
    </Link>
  );
};

export default Card;
