import './Card.scss'

const Card = (props) => {
    return (
        <div className="card">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${props.image_url})`
                }} />
            <div className="score">★ {props.score}</div>
            <div className="card-footer">
                <span>{props.title}</span>
            </div>

        </div>
    )
}
export default Card;