import './Card.scss'
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <Link to={`/detail/${props.mal_id}`} className="card">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${props.image_url})`
                }} />
            <div className="score">★ {props.score}</div>
            <div className="card-footer">
                <span>{props.title}</span>
            </div>
        </Link>
    )
}
export default Card;