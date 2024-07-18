import { GET_LAVORO } from "../actions/lavoroLista"

const initialState = {
    lavoro: []
}

const lavoroReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_LAVORO: 
        return {
            lavoro: action.playload

        };
        default:
        return state;
    }
}

export default lavoroReducer