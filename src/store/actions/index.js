import { ADD_ARTICLE,GET_DATA,GET_DATA_2, DATA_RECEIVED} from "../../constants/action-types";

export function addArticle(payload){
    return { 
        type: ADD_ARTICLE,
        payload
    }
}

export function getData(payload){
    return { 
        type: GET_DATA,
        payload
    }
}

export function getThunkData(payload){
    return dispatch => {
        fetch('./data.json').then(response=> {
            response.json().then(json=>{
                dispatch({ type: DATA_RECEIVED, payload:json })
            })
            
        });
        
    }
    // return { 
    //     type: GET_DATA_2,
    //     payload
    // }
}