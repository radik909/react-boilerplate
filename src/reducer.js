/*@flow*/
import { combineReducers } from 'redux';

// import reducers from the respective folders
const dummy = (state = { data: 'Reducer da!' }, action) => {
  switch (action.type) {
    case 'DUMMY':
      return { ...state, data: action.data };
    default:
      return state;
  }
};

export default combineReducers({
  dummy
});
