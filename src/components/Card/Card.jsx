import './Card.scss'
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <Link to={`/detail/${props.mal_id}`} className="card">
            <img src={props.image_url} alt="poster" />
            <div className="score">★ {props.score}</div>
            <div className="card-footer">
                <span>{props.title}</span>
            </div>
        </Link>
    )
}
export default Card;