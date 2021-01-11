import { useState, useEffect } from 'react';
import axios from 'axios';
import TopAiringPreview from '../TopAiringPreview/TopAiringPreview'

const TopAiring = () => {
    const [airings, setAirings] = useState([]);

    useEffect(() => {
        axios.get(`https://api.jikan.moe/v3/top/anime/1/airing`)
            .then(res => setAirings(res.data.top))
            .catch(err => console.error(err))
    }, [])
    return (
        <>
            <TopAiringPreview airings={airings} />
        </>
    )
}

export default TopAiring;