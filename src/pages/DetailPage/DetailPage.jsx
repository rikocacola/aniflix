import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './DetailPage.scss'

const DetailPage = () => {
    const { id } = useParams();
    const [anime, setAnime] = useState({});
    const [genres, setGenres] = useState([])

    useEffect(() => {
        const fetchAnime = async () => {
            try {
                const data = await axios.get(`https://api.jikan.moe/v3/anime/${id}`);
                return (
                    setAnime(data.data),
                    setGenres(data.data.genres)
                );
            } catch (error) {
                console.error("error", error)
            }
        }
        fetchAnime();
    }, [])


    return (
        <div className="detail-page">
            {anime.trailer_url === null ?
                <div style={{ textAlign: "center" }}>Trailer Not Available</div> :
                <div className="container-trailer">
                    <iframe className="trailer" src={`${anime.trailer_url}`} frameBorder="0" title="Trailer Anime" allowFullScreen={true} />
                </div>
            }
            <div className="image-title">
                <img src={`${anime.image_url}`} alt="poster" className="image" />
                <div className="title">
                    <h2>{anime.title}</h2>
                    {anime.score === null ? "" : <h3><span className="score">★</span> {anime.score}</h3>}
                    {(anime.title_english === null || anime.title_japanese === null) ? "" :
                        <><span>{anime.title_english} / {anime.title_japanese}</span><br /></>}

                    <span>Release : {anime.premiered}</span><br />
                    <span>Genre :
                        {genres.map((genre, idx) => <span key={genre.mal_id}>{genre.name} {idx < genres.length - 1 ? ',\u00A0' : ''}</span>)}
                    </span><br />
                    {anime.airing ?
                        <>
                            <span>Episode : {anime.episodes}</span><br />
                            <span>Duration : {anime.duration}</span>
                        </>
                        :
                        <span>{anime.status}</span>}

                </div>
            </div>
            <div className="synopsis">
                <h1>Synopsis</h1>
                <p>{anime.synopsis}</p>
            </div>
        </div >
    )
}

export default DetailPage;