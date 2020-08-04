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
}

export const fetchCar = (id) => {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
  .then(response => response.json())
  return {
    type: 'FETCH_CAR',
    payload: promise
  }
}

export const deleteCar = (history, car) => {
  fetch(`https://wagon-garage-api.herokuapp.com/cars/${car.id}`, {method: 'DELETE'})
  .then(response => response.json())
  .then(() => history.push(""))
  return {
    type: 'DELETE_CAR',
    payload: car
  }
}
