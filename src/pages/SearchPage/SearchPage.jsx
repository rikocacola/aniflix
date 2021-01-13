import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Card from '../../components/Card/Card';

import './SearchPage.scss'

const SearchPage = () => {
    const [results, setResults] = useState([]);
    let { search } = useParams();
    useEffect(() => {
        axios.get(`https://api.jikan.moe/v3/search/anime?q=${search}`)
            .then(res => setResults(res.data.results))
    }, [])
    console.log(search)
    return (
        <div className="search-page">
            <h1 className="title">Result for : "{search}"</h1>
            <div className="container-anime">
                {
                    results.map(({ mal_id, ...otherProps }) => (
                        <Card className="anime" key={mal_id} mal_id={mal_id} {...otherProps} />
                    ))
                }
            </div>
        </div>
    )
}

export default SearchPage