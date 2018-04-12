import { combineReducers } from 'redux';

// import reducers from the respective folders
const dummy = (state = {}, action) => {
  switch (action.type) {
    case 'DUMMY':
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  dummy
});
