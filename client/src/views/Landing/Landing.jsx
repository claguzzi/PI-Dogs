import React from 'react';
import { useHistory } from 'react-router-dom';
import  './Landing.css'



const Landing = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push('/home');
  };

  return (
    <div className="container">
      <h1 className="title">WELCOME TO PI_DOGS</h1>
      <button className="button" onClick={goToHome}>INGRESAR</button>
    </div>
  );
};

export default Landing;
