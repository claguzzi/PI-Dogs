import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogsByName } from '../../redux/actions';
import { useHistory } from 'react-router-dom';




 
 const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [nombre, setNombre] = useState('');

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getDogsByName(nombre)); // Dispatch de la acción para buscar razas por nombre
   history.push('/byname'); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        placeholder="Buscar raza de perro..."
        value={nombre}
        onChange={handleInputChange}
      />
      <button type="submit"  disabled= {!nombre}>Buscar</button>
    </form>
  );
};

export default SearchBar;
