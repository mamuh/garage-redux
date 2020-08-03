export const fetchCars = (garage) => {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
  .then(response => response.json())
  return {
    type: 'FETCH_CARS',
    payload: promise
  }
}

export const addCar = (garage, body, callback) => {
  const request = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  .then(response => response.json())
  .then(callback);
  return {
    type: 'ADD_CAR',
    payload: request
  }
  // .then(data => {
  //   return {
  //     type: 'ADD_CAR',
  //     payload: data
  //   }
  //   console.log('Success:', data);
  // })
  // .catch((error) => {
  //   console.error('Error:', error);
  // });
}
