import { SET_SMURFS } from "../actions";

const initialState = {
  smurfs: []
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case SET_SMURFS:
      newState.smurfs = action.payload;
      break;
    default:
      break;
  }
  return newState;
};

export default reducer;
