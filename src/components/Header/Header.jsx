import SearchBox from '../SearchBox/SearchBox';

import './Header.scss';

const Header = ({ handleChange }) => {
    return (
        <nav className="header">
            <h1 style={{ color: "red" }}>AniFlix</h1>
            <SearchBox placeholder="search anime" handleChange={handleChange} />
        </nav>
    )
}

export default Header;