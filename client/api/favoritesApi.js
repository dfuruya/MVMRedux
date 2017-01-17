import axios from 'axios';

export const fetchFavs = () => {
  axios.get('/api/favs')
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error('GET failed!');
  });
};

export const storeFavs = favs => {
  axios.post('/api/favs', favs)
  .then((result) => {
    console.log('POST success: ', result.data.ops);
  })
  .catch((err) => {
    console.error('POST failed!');
  });
};
