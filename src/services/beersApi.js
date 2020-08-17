import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/',
});

export const loadBeers = () => {
  return instance.get('/beers').then((response) => {
    const data = response.data;
    return data;
  });
};

export const loadSingleBeer = (id) => {
  return instance.get(`/beers/${id}`).then((response) => {
    const data = response.data;
    return data;
  });
};

export const loadRandomBeer = () => {
  return instance.get(`/beers/random`).then((response) => {
    const data = response.data;
    return data;
  });
};

export const addNewBeer = (body) => {
  return axios
    .post('https://ih-beers-api2.herokuapp.com/beers/new', body)
    .then((response) => {
      const data = response.data;
      return response;
    });
};
