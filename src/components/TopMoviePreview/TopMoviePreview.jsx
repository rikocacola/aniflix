import './TopMoviePreview.scss'
import Card from '../Card/Card'

const TopMoviePreview = (props) => {
    return (
        <div className="top-movie-preview">
            <div className="title">
                Top Anime Movies
            </div>
            <div className="preview">
                {
                    props.movies.filter((movie, idx) => idx < 4).map(({ mal_id, ...otherProps }) => (
                        <Card key={mal_id} {...otherProps} />
                    ))
                }
            </div>
        </div>
    )
}

export default TopMoviePreview;