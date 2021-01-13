import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Card from '../Card/Card';

import './TopAiringPreview.scss';

const TopAiringPreview = () => {
    const linkStyle = {
        textDecoration: "none"
    }

    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        axios.get(`https://api.jikan.moe/v3/top/anime/1/airing`)
            .then(res => setAnimes(res.data.top))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className="top-airing-preview">
            <Link style={linkStyle} to='aniflix/airing'>
                <h1 className="title">
                    Top Airing Anime
            </h1>
            </Link >
            <div className="container-preview">
                {
                    animes.filter((anime, idx) => idx < 4).map(({ mal_id, ...otherProps }) => (
                        <div className="preview" key={mal_id}><Card mal_id={mal_id} {...otherProps} /></div>
                    ))
                }
            </div>
        </div >
    )
}

export default TopAiringPreview;