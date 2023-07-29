import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { options, baseImgUrl } from '../constants/constants';
import { Link } from 'react-router-dom';
import { BsListColumnsReverse } from 'react-icons/bs';
import { TfiLayoutColumn4 } from 'react-icons/tfi';

const SearchResults = () => {
    const [films, setFilms] = useState(null);
    const [showGrid, setShowGrid] = useState(true);
    const [selectedIcon, setSelectedIcon] = useState('grid');

    const location = useLocation();
    const query = new URLSearchParams(location.search).get('search_query');

    useEffect(() => {
        setFilms(null);

        console.log('ARAMA TERİMİ', query);

        axios
            .get(`https://api.themoviedb.org/3/search/movie?query=${query}`, options)
            .then((res) => setFilms(res.data.results))
            .catch((error) => console.error('Hata oluştu: ', error));
    }, [query]);

    console.log(films);

    const handleIconClick = (gridView) => {
        setShowGrid(gridView);
        setSelectedIcon(gridView ? 'grid' : 'list');
    };

    return (
        <div>
            <div className='p-4'>
                {!films ? (
                    'Arama sonuçları yükleniyor...'
                ) : (
                    <div>
                        <h2 className='justify-content-between d-flex align-items-center'>
                            Aranan Kelime: {query} 
                            <div className='ml-auto p-3 gap-3 icons'>
                                <span>
                                    <TfiLayoutColumn4
                                        className='mr-2'
                                        onClick={() => handleIconClick(true)}
                                        style={{ cursor: 'pointer', borderBottom: selectedIcon === 'grid' ? '5px solid yellow ' : 'none' }}
                                        title='Grid View'
                                    />
                                </span>
                                <span className='p-3 '>
                                    <BsListColumnsReverse
                                        onClick={() => handleIconClick(false)}
                                        style={{ cursor: 'pointer', borderBottom: selectedIcon === 'list' ? '5px solid yellow ' : 'none' }}
                                        title='List View'
                                    />
                                </span>
                            </div>
                        </h2>

                        {showGrid ? (
                            <div className='row'>
                                {films.map((movie, i) => (
                                    <div className='col-md-3 mb-4' key={i}>
                                        <Link to={`/movie/${movie.id}`} className='text-white text-decoration-none btn'>
                                            <img
                                                style={{ maxHeight: '400px' }}
                                                className='movie img-fluid rounded'
                                                src={`${baseImgUrl}${movie.poster_path}`}
                                                alt={movie.original_title}
                                            />
                                            <h5>{movie.original_title}</h5>
                                            <small><em>({movie.release_date})</em></small>

                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <ul className=''>
                                {films.map((movie, i) => (
                                    <li key={i}>
                                        <Link to={`/movie/${movie.id}`} className=' text-white d-flex justify-content-between align-items-center text-decoration-none btn'>
                                            <h4 className='gap-4'>
                                                
                                            {movie.original_title}
                                            <small className='d-flex'><em>({movie.release_date})</em></small>

                                            </h4>
                                            <img
                                                style={{maxWidth:"90px" }}
                                                className="img-fluid rounded shadow-lg"
                                                src={baseImgUrl.concat(movie.poster_path)}
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchResults;
