import { useState, useEffect } from 'react';
import axios from 'axios'

import Card from '../../components/Card/Card'

import './TopAiringPage.scss'

const TopAiringPage = () => {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        axios.get(`https://api.jikan.moe/v3/top/anime/1/airing`)
            .then(res => setAnimes(res.data.top))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="top-airing-page">
            <h1 className="title">Top 50 Airing Anime</h1>
            <div className="container-anime">
                {
                    animes.map(({ mal_id, ...otherProps }) => (
                        <Card className="anime" key={mal_id} mal_id={mal_id} {...otherProps} />
                    ))
                }
            </div>
        </div>
    )
}

export default TopAiringPage;