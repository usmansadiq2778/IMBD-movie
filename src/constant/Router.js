import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Header from '../components/Header/Header';
import Movielist from '../components/MovieList/Movielist';
import Home from '../Pages/Home/Home';
import MovieDetail from '../Pages/MovieDetail/MovieDetail';
export default function Routers() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='movie/:id' element={<MovieDetail />} />
                    <Route path='movies/:type' element={<Movielist />} />
                    <Route path='/*' element={<h1>Error page</h1>} />
                </Routes>
            </Router>
        </div>
    );
}
