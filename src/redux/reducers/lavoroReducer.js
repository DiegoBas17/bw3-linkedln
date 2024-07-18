import { GET_LAVORO, SEARCH_LAVORO } from "../actions/lavoroLista";

const initialState = {
  lavori: [],
};

const lavoroReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LAVORO:
      return {
        ...state,
        lavori: action.playload,
      };
    case SEARCH_LAVORO:
      return {
        ...state,
        lavori: action.payload,
      };
    default:
      return state;
  }
};

export default lavoroReducer;
