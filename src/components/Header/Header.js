import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css';
import logo from '../Assests/IMDB_Logo_2016.svg.png';

export default function Header() {
    return (
        <div>
            <nav className='navbar navbar-expand-lg bg-body-tertiary navbar-dark px-3'>
                <div className='container-fluid'>
                    <Link className='navbar-brand' to='/'>
                        <img
                            src={logo}
                            alt='Logo'
                            width='110'
                            height='50'
                            className='d-inline-block align-text-top'
                        />
                    </Link>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNav'
                        aria-controls='navbarNav'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav   ms-auto mt-2 mt-lg-0'>
                            <li className='nav-item'>
                                <Link
                                    className='nav-link active'
                                    aria-current='page'
                                    to='movies/popular'
                                >
                                    Popular
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className='nav-link'
                                    to='movies/top_rated'
                                >
                                    Top Rated
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='movies/upcoming'>
                                    Upcoming
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
