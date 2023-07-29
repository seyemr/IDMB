import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../components/Hero';
import {
  getGenres,
  getMovies,
  setLoading,
} from '../redux/actions/actions';
import ListMovies from '../components/ListMovies';

const MainPage = () => {
  const state = useSelector((store) => store.movieReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    // loadingi true yapar
    dispatch(setLoading(true));

    // popular film verisini çek ve store'a aktar
    dispatch(getMovies());

    // kategori verilini çek ve store'a aktar
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />
      {/*
       * herbir kategori için o ketagoriye ait
       * filmleri listeleyecek bileşeni ekran basma
       */}
      {state.genres.map((genre) => (
        <ListMovies key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

export default MainPage;
