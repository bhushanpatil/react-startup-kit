import { ADD_ARTICLE,DATA_RECEIVED } from "../../constants/action-types";

const initialState = {
    items: [
        {
          title: "test initial"
        },
        {
          title: "test2"
        }
      ]
};

function rootReducer (state = initialState, action){
    switch (action.type) {
        case ADD_ARTICLE:
        return Object.assign({}, state, { 
            items: state.items.concat(action.payload)
        });
        
        break;    
        case DATA_RECEIVED:
        console.log(action);
        return {...state,items: [...state.items, ...action.payload.items]}
        break;
        
        default:
            return state;
            break;
    }
    
}

export default rootReducer;