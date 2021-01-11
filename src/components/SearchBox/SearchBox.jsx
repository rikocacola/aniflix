import './SearchBox.scss';

const SearchBox = ({ placeholder, handleSubmit, handleChange, value }) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                className="search-box"
                type="search"
                name="search"
                placeholder={placeholder}
                onChange={handleChange}
                value={value} />
            {/* <input type="submit" value="Submit" /> */}
        </form>
    )
}

export default SearchBox;