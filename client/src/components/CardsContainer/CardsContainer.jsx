import React, { useState,useEffect } from "react";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";





const CardsContainer = () => {
  
  const dogs = useSelector((state) => state.dogs);

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  // Calcula el índice inicial y final de las cards para la página actual
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = dogs.slice(indexOfFirstCard, indexOfLastCard);

  // Función para cambiar de página
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [dogs]);

  return (

    <div className={style.container}>
      {currentCards.map((dog) => {
        return (
          <Card
            key={dog.id}
            id={dog.id}
            nombre={dog.nombre}
            imagen={dog.imagen}
            peso={dog.peso}
            altura={dog.altura}
            añosDeVida={dog.años_de_vida}
            temperamentos={dog.temperamentos && dog.temperamentos.join(" ")}
          />
        );
      })}
      <div className={style.pagination}>
        {Array.from({ length: Math.ceil(dogs.length / cardsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? style.active : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;

