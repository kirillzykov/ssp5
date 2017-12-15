
const initialState ={
    fetching: false,
    fetched: false,
    data: [],
    error: null,
};

export function reducer(state={initialState}, action){
    switch(action.type) {
        case "FETCH_DATA_START":{
            return {
                ...state,
                fetching: true
            };
        }
        case "FETCH_DATA_ERROR":{
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        }
        case "FETCH_DATA_RECEIVED":{
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: action.payload
            };
        }
        default:{
            return state;
        }
    }
}
