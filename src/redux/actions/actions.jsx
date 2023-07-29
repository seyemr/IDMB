import axios from 'axios';
import { ActionTypes } from '../../constants/actionTypes';
import { options } from '../../constants/constants';

// bütün atılan isteklerin başına eklenir
axios.defaults.baseURL = 'https://api.themoviedb.org/3';


// ! Senkron (Normal) Aksiyon
// Aksiyon Objesi oluşturan bir fonksiyon
export const setLoading = (payload) => ({
  type: ActionTypes.SET_LOADING,
  payload,
});

//! Asenkron (Thunk) Aksiyon
// Hem verileri çeksin hem reducer'a aktarsın
export const getMovies = () => {
  return async function (dispatch) {
    // veri çekme işlemleri
    const res = await axios.get(
      '/movie/popular?language=tr',
      options
    );

    console.log(res)

    // gelen veriyi reducer'a aktarma
    dispatch({
      type: ActionTypes.SET_MOVIES,
      payload: res.data,
    });
  };
};

export const getGenres = () => (dispatch) => {
  // kategori verilerini çek
  axios
    .get('/genre/movie/list?language=tr', options)
    .then((res) =>
      // reducer'a aktar
      dispatch({
        type: ActionTypes.SET_GENRES,
        payload: res.data.genres,
      })
    )
    .catch((err) => console.log(err));
};
