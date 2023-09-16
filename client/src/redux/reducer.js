import {
  GET_ALL_DOGS, GET_DOG_DETAIL, GET_DOGS_BY_NAME, GET_TEMPERAMENTS,
  SET_TEMPERAMENT_FILTER, SET_ORIGIN_FILTER,
  SET_RAZE_ORDER, SET_RAZE_BYWEIGTH_ORDER, CLEAN_DETAIL
} from "./actions";


const initialState = {
  dogs: [],
  dogDetail: {},
  allDogs: [],
  dogId: {},
  dogsByName: [],
  originalDogs: [],
  allTemperaments: []
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return { ...state, dogs: action.payload, allDogs: action.payload }


    case GET_DOG_DETAIL:
      return { ...state, dogDetail: action.payload }






    case GET_DOGS_BY_NAME:
      return { ...state, dogsByName: action.payload }






    case SET_RAZE_ORDER:
      let copyDogs = [...state.dogs];
      if (action.payload === 'A') {
        copyDogs.sort((a, b) => a.nombre.localeCompare(b.nombre));
      } else if (action.payload === 'D') {
        copyDogs.sort((a, b) => b.nombre.localeCompare(a.nombre));
      }
      return { ...state, dogs: copyDogs };





      case SET_RAZE_BYWEIGTH_ORDER:
        let copyDogs1 = [...state.dogs];
        if (action.payload === 'A') {
          copyDogs1.sort((a, b) => {
            const pesoA = parseFloat(a.peso.split('-')[0]);
            const pesoB = parseFloat(b.peso.split('-')[0]);
            return pesoA - pesoB;
          });
        } else if (action.payload === 'D') {
          copyDogs1.sort((a, b) => {
            const pesoA = parseFloat(a.peso.split('-')[1]);
            const pesoB = parseFloat(b.peso.split('-')[1]);
            return pesoB - pesoA;
          });
        }
        return { ...state, dogs: copyDogs1 };
      

    case GET_TEMPERAMENTS:
      return { ...state, allTemperaments: action.payload };


      case SET_TEMPERAMENT_FILTER:
        const filterTemp = state.allDogs;
        const { payload } = action;
        const temperamentFilter = payload === "All" ? filterTemp : filterTemp.filter(el => el.temperamentos && el.temperamentos.includes(payload));
        return {
          ...state,
          dogs: temperamentFilter
        };
      







    case SET_ORIGIN_FILTER:
      
      let filteredDogs = [];

      if (state.originalDogs.length === 0) {
        state.originalDogs = [...state.dogs];
      }
      if (action.payload === "API") {
        filteredDogs = state.originalDogs.filter((dog) => !isNaN(dog.id));
      } else if (action.payload === "BDD") {
        filteredDogs = state.originalDogs.filter((dog) => isNaN(dog.id));
      } else if (action.payload === "ALL") {
        filteredDogs = [...state.originalDogs];
      } else {
        return state;
      }
      return { ...state, dogs: filteredDogs };



    case CLEAN_DETAIL:
      return {
        ...state,
        dogDetail: {}
      };

    default:
      return { ...state };
  }
}

export default rootReducer;

