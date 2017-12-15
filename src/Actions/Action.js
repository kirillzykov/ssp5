
export  function fetchData() {
    return function(dispatch){
        dispatch({type: "FETCH_DATA_START"});
        fetch(`https://api.github.com/users/kirillzykov`)
            .then(response=>{
                response.json().then(data => {
                    dispatch({type: "FETCH_DATA_RECEIVED", payload: response.data})
                    console.log(response.data);
                })
            })
            .catch((err)=>{
                dispatch({type: "FETCH_DATA_ERROR", payload: err})
            })
    }
}



