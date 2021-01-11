import SearchBox from '../SearchBox/SearchBox';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = ({ handleChange, handleSubmit, value }) => {
    const linkStyle = {
        textDecoration: 'none'
    }

    return (
        <nav className="header">
            <Link to='/' style={linkStyle}>
                <h1 style={{ color: "red" }}>AniFlix</h1>
            </Link>
            <SearchBox placeholder="search anime" handleChange={handleChange} handleSubmit={handleSubmit} value={value} />
        </nav>
    )
}

export default Header;