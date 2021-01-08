import './SearchBox.scss';

const SearchBox = (props) => {
    return (
        <form onSubmit="">
            <input className="search-box" type="search" placeholder={props.placeholder} onChange={props.handleChange} />
        </form>
    )
}

export default SearchBox;