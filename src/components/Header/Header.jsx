import SearchBox from '../SearchBox/SearchBox';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

import './Header.scss';

const Header = () => {
    const linkStyle = {
        textDecoration: 'none'
    }

    const [searchField, setSearchField] = useState('');

    let history = useHistory();

    const handleChange = e => {
        setSearchField(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/aniflix/search/${searchField}`)
    }

    return (
        <nav className="header">
            <Link to='/aniflix' style={linkStyle}>
                <h1 style={{ color: "red" }}>AniFlix</h1>
            </Link>
            <SearchBox placeholder="search anime" handleChange={handleChange} handleSubmit={handleSubmit} value={searchField} />
        </nav>
    )
}

export default Header;