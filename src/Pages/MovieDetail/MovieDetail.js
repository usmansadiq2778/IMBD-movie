/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../MovieDetail/MovieDetail.css';
export default function MovieDetail() {
    const [movieDetail, setmovieDetail] = useState('');
    const { id } = useParams();
    useEffect(() => {
        getData();
        window.scrollTo(0, 0);
    }, []);
    const getData = () => {
        fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        )
            .then((response) => response.json())
            .then((data) => setmovieDetail(data));
    };
    return (
        <div className='movie'>
            <div className='movie__intro'>
                <img
                    className='movie__backdrop d-block w-100 lg-h-90vh'
                    src={`https://image.tmdb.org/t/p/original${
                        movieDetail ? movieDetail.backdrop_path : ''
                    }`}
                />
            </div>
            <div className='movie__detail'>
                <div className='movie__detailLeft'>
                    <div className='movie__posterBox'>
                        <img
                            className='movie__poster'
                            src={`https://image.tmdb.org/t/p/original${
                                movieDetail ? movieDetail.poster_path : ''
                            }`}
                        />
                    </div>
                </div>
                <div className='movie__detailRight'>
                    <div className='movie__detailRightTop'>
                        <div className='movie__name'>
                            {movieDetail ? movieDetail.original_title : ''}
                        </div>
                        <div className='movie__tagline'>
                            {movieDetail ? movieDetail.tagline : ''}
                        </div>
                        <div className='movie__rating'>
                            {movieDetail ? movieDetail.vote_average : ''}{' '}
                            <i class='fas fa-star' />
                            <span className='movie__voteCount'>
                                {movieDetail
                                    ? '(' + movieDetail.vote_count + ') votes'
                                    : ''}
                            </span>
                        </div>
                        <div className='movie__runtime'>
                            {movieDetail ? movieDetail.runtime + ' mins' : ''}
                        </div>
                        <div className='movie__releaseDate'>
                            {movieDetail
                                ? 'Release date: ' + movieDetail.release_date
                                : ''}
                        </div>
                        <div className='movie__genres'>
                            {movieDetail && movieDetail.genres
                                ? movieDetail.genres.map((genre) => (
                                      <>
                                          <span
                                              className='movie__genre'
                                              id={genre.id}
                                          >
                                              {genre.name}
                                          </span>
                                      </>
                                  ))
                                : ''}
                        </div>
                    </div>
                    <div className='movie__detailRightBottom'>
                        <div className='synopsisText'>Synopsis</div>
                        <div>{movieDetail ? movieDetail.overview : ''}</div>
                    </div>
                </div>
            </div>
            <div className='movie__links'>
                <div className='movie__heading'>Useful Links</div>
                {movieDetail && movieDetail.homepage && (
                    <a
                        href={movieDetail.homepage}
                        target='_blank'
                        style={{ textDecoration: 'none' }}
                    >
                        <p>
                            <span className='movie__homeButton movie__Button'>
                                Homepage{' '}
                                <i className='newTab fas fa-external-link-alt'></i>
                            </span>
                        </p>
                    </a>
                )}
                {movieDetail && movieDetail.imdb_id && (
                    <a
                        href={
                            'https://www.imdb.com/title/' + movieDetail.imdb_id
                        }
                        target='_blank'
                        style={{ textDecoration: 'none' }}
                    >
                        <p>
                            <span className='movie__imdbButton movie__Button'>
                                IMDb
                                <i className='newTab fas fa-external-link-alt'></i>
                            </span>
                        </p>
                    </a>
                )}
            </div>
            <div className='movie__heading'>Production Companies</div>
            <div className='movie__production'>
                {movieDetail &&
                    movieDetail.production_companies &&
                    movieDetail.production_companies.map((company) => (
                        <>
                            {company.logo_path && (
                                <span className='productionCompanyImage'>
                                    <img
                                        className='movie__productionComapany'
                                        src={
                                            'https://image.tmdb.org/t/p/original' +
                                            company.logo_path
                                        }
                                    />
                                    <span className='text-white'>
                                        {company.name}
                                    </span>
                                </span>
                            )}
                        </>
                    ))}
            </div>
        </div>
    );
}
