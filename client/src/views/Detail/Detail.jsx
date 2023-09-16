import { useParams } from "react-router-dom";
import style from "./Detail.module.css"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogDetail, cleanDetail } from "../../redux/actions"




const Detail = () => {

  const { id } = useParams()
  const dispatch = useDispatch()


  const detail = useSelector((state) => state.dogDetail);
  const dogs = useSelector((state) => state.dogs);
  

  useEffect(() => {
    dispatch(getDogDetail(id));
    return (() => dispatch(cleanDetail()))
  }, [dispatch])


  if (!Array.isArray(detail) || detail.length === 0) {
    return <h1>Cargando...</h1>;
  }


  const filteredDog = dogs.find((dog) => dog.id === Number(id));
  

  return (
    <div className={style.container}>
      <h1 className={style.titulo}>BREED DETAIL</h1>
      {filteredDog && <img src={filteredDog.imagen} alt="Imagen" />}
      <h1>ID : {detail[0].id}</h1>
      <h1>NOMBRE : {detail[0].nombre}</h1>
      <h1>ALTURA : {detail[0].altura} Cms.</h1>
      <h1>PESO : {detail[0].peso} Kgs.</h1>
      <h1>TEMPERAMENTOS : {detail[0].temperamentos}</h1>
      <h1>AÑOS DE VIDA : {detail[0].añosDeVida}</h1>
    </div>

  );
};

export default Detail;
