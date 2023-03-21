import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import '../MovieList/Movielist.css';
import { useParams } from 'react-router-dom';

export default function Movielist() {
    const [movie, setmovielist] = useState('');
    const { type } = useParams();
    useEffect(() => {
        getData();
    }, []);
    useEffect(() => {
        getData();
    }, [type]);

    const getData = () => {
        fetch(
            `https://api.themoviedb.org/3/movie/${
                type ? type : 'popular'
            }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        )
            .then((response) => response.json())
            .then((data) => setmovielist(data.results));
    };
    return (
        <div className='movielist'>
            <h2 className='list_title'>
                {(type ? type : 'popular').toUpperCase()}
            </h2>
            <div className='container '>
                <div className='row'>
                    <div className='col text-center'>
                        {Array.from(movie).map((movie, i) => (
                            <Card movie={movie} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
