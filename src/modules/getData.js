const getData = (str) => {
    return fetch(`https://intesiv-ozon-default-rtdb.firebaseio.com/goods.json`)
        .then((response) => {
            return response.json()
        });
}

export default getData;