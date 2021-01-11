import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Card from '../Card/Card'

import './TopMoviePreview.scss'

const TopMoviePreview = () => {
    const linkStyle = {
        textDecoration: 'none'
    }
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://api.jikan.moe/v3/top/anime/1/movie`)
            .then(res => setMovies(res.data.top))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className="top-movie-preview">
            <Link style={linkStyle} to="/movie">
                <h1 className="title">
                    Top Movie Anime
                </h1>
            </Link>
            <div className="container-preview">
                {
                    movies.filter((movie, idx) => idx < 4).map(({ mal_id, ...otherProps }) => (
                        <div className="preview" key={mal_id}><Card mal_id={mal_id} {...otherProps} /></div>
                    ))
                }
            </div>
        </div>
    )
}

export default TopMoviePreview;