

export const fetchRandom = list => dispatch => {

    dispatch({ type: "view-loading" });

    return fetch(`http://localhost:8080/r`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({list}) // body data type must match "Content-Type" header
    })
        .then(response => response.json())
        .then(json => dispatch(dispatch({ type: "view-loaded", data: json })))
}

//TODO: agregar las demas acciones