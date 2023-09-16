import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import style from "../ByName/ByName.module.css";

const ByName = () => {
  const perro = useSelector((state) => state.dogsByName);
  const [alertaNoEncontrado, setAlertaNoEncontrado] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!Array.isArray(perro) || perro.length === 0) {
        setAlertaNoEncontrado(true);
      }
    }, 5000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [perro]);

  if (!Array.isArray(perro) || perro.length === 0) {
    return (
      <div>
        <h1>Cargando...</h1>
        {alertaNoEncontrado && <h1>NOMBRE NO ENCONTRADO</h1>}
      </div>
    );
  }

  return (
    <div className={style.container}>
      <h1 className={style.titulo}>DETAIL BY NAME</h1>
      <h1>ID: {perro[0].id}</h1>
      <h1>NOMBRE: {perro[0].nombre}</h1>
      <h1>ALTURA: {perro[0].altura} Cms.</h1>
      <h1>PESO: {perro[0].peso} Kgs.</h1>
      <h1>TEMPERAMENTOS: {perro[0].temperamentos}</h1>
      <h1>AÑOS DE VIDA: {perro[0].añosDeVida}</h1>
    </div>
  );
};

export default ByName;
