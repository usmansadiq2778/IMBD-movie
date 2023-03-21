import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-bootstrap/Carousel';
import '../Home/Home.css';
import { Link } from 'react-router-dom';
import Movielist from '../../components/MovieList/Movielist';

export default function Home() {
    const [popular, setpopular] = useState('');
    useEffect(() => {
        fetch(
            'https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US'
        )
            .then((response) => response.json())
            .then((data) => setpopular(data.results));
    }, []);
    return (
        <div>
            <Carousel showthumbs='false' auto>
                {Array.from(popular).map((movie, i) => (
                    <Carousel.Item>
                        <Link
                            style={{ textDecoration: 'none' }}
                            to={`/movie/${movie.id}`}
                            key={movie.id}
                        >
                            <div className='poster-image'>
                                <img
                                    className='d-block w-100 lg-h-90vh'
                                    src={` https://image.tmdb.org/t/p/original${
                                        movie && movie.backdrop_path
                                    }`}
                                    alt='First slide'
                                />
                            </div>

                            <Carousel.Caption className='overlay'>
                                <div className='title'>
                                    {movie && movie.original_title}
                                </div>
                                <div className='runtime'>
                                    {movie ? movie.release_date : ''}{' '}
                                    <span className='rating'>
                                        {movie ? movie.vote_average : ''}
                                        <i
                                            className='fa fa-star'
                                            aria-hidden='true'
                                        ></i>
                                    </span>
                                </div>
                                <div className='discription'>
                                    {movie && movie.overview}
                                </div>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                ))}
            </Carousel>
            <Movielist />
        </div>
    );
}
