/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';
import '../Card/Card.css';
export default function Card({ movie }) {
    const [loding, setloading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 1500);
    }, []);
    return (
        <>
            {loding ? (
                <div className='cards '>
                    <SkeletonTheme
                        color='#202020'
                        baseColor='#202020'
                        highlightColor='#444'
                    >
                        <Skeleton height={300} duration={2} />
                    </SkeletonTheme>
                </div>
            ) : (
                <Link
                    to={`/movie/${movie.id}`}
                    style={{ textDecoration: 'none', color: 'white' }}
                >
                    <div className='card text-bg-dark'>
                        <img
                            className=' card__img'
                            src={`https://image.tmdb.org/t/p/original${
                                movie ? movie.poster_path : ''
                            }`}
                        />

                        <div className='card-img-overlay'>
                            <div className='card-title'>
                                {movie ? movie.original_title : ''}
                            </div>
                            <div className='card-runtime'>
                                {movie ? movie.release_date : ''}{' '}
                                <span className='card-rating'>
                                    {movie ? movie.vote_average : ''}
                                    <i
                                        className='fa fa-star'
                                        aria-hidden='true'
                                    ></i>
                                </span>
                            </div>
                            <div className='card-discription'>
                                {movie
                                    ? movie.overview.slice(0, 100) + '...'
                                    : ''}
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </>
    );
}
