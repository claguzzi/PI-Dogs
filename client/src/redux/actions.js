import axios from "axios"
export const GET_ALL_DOGS = "GET_ALL_DOGS"
export const GET_DOG_DETAIL = "GET_DOG_DETAIL"
export const GET_DOGS_BY_NAME = "GET_DOGS_BY_NAME"
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS"
export const SET_RAZE_ORDER = "SET_RAZE_ORDER"
export const SET_RAZE_BYWEIGTH_ORDER = "SET_RAZE_BYWEIGTH_ORDER"
export const SET_TEMPERAMENT_FILTER = "SET_TEMPERAMENT_FILTER"
export const SET_ORIGIN_FILTER = "SET_ORIGIN_FILTER"
export const CLEAN_DETAIL = "CLEAN_DETAIL"







export const getAllDogs = () => {
  return async function (dispatch) {
    const data = await axios.get("http://localhost:3001/dogs")
    dispatch({ type: GET_ALL_DOGS, payload: data.data })
  }
}





export const getDogDetail = (id) => {
  return async function (dispatch) {
    const data = await axios.get(`http://localhost:3001/dogs/${id}`)
    dispatch({ type: GET_DOG_DETAIL, payload: data.data })
  }
}





export const getDogsByName = (nombre) => {
  return async function (dispatch) {
    const data = await axios.get(`http://localhost:3001/dogs/name?name=${nombre}`)
    dispatch({ type: GET_DOGS_BY_NAME, payload: data.data })
  }
}


export const getTemperaments = () => {
  return async function(dispatch){
      var temperamentData = await axios.get('http://localhost:3001/temperaments');
      const temperaments = temperamentData.data
      dispatch({
          type: GET_TEMPERAMENTS,
          payload: temperaments})
  }
}

export const setRazeOrder = (value) => {
  return { type: SET_RAZE_ORDER, payload: value };
};



export const setRazeOrderByWeight = (value) => {
  return { type: SET_RAZE_BYWEIGTH_ORDER, payload: value };
};



export const setTempFilter = (value) => {
  return { type: SET_TEMPERAMENT_FILTER, payload: value };
};


export const setOriginFilter = (value) => {
  return { type: SET_ORIGIN_FILTER, payload: value };
};

export const cleanDetail = () => {
  return {
      type: CLEAN_DETAIL
  }
}










