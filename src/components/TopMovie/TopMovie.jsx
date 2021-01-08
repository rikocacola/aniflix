import { useState, useEffect } from 'react';
import axios from 'axios';

import TopMoviePreview from '../TopMoviePreview/TopMoviePreview'

const TopMovie = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://api.jikan.moe/v3/top/anime/1/movie`)
            .then(res => setMovies(res.data.top))
            .catch(err => console.error(err))
    }, [])
    return (
        <>
            <TopMoviePreview movies={movies} />
        </>
    )
}

export default TopMovie;
