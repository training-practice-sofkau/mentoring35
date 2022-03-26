

export const fetchRandom = (state) => (dispatch) => {

    console.log(state);
    dispatch({ type: "view-loading" });
    const toSend = {
        suitList: state.card.suitList,
        numberList: state.card.numberList
    };

    return fetch(`http://localhost:8080/api/card`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(toSend) // body data type must match "Content-Type" header
    }).then(response => response.json())
      .then(json => {
          dispatch({ type: "random-result", data: json });
          dispatch({ type: "view-loaded" });
        })
}


//TODO: agregar las demas acciones