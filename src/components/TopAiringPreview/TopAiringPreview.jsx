import Card from '../Card/Card';

import './TopAiringPreview.scss';

const TopAiringPreview = (props) => {
    return (
        <div className="top-airing-preview">
            <h1 className="title">
                Top Airing Anime
            </h1>
            <div className="preview">
                {
                    props.airings.filter((airing, idx) => idx < 4).map(({ mal_id, ...otherProps }) => (
                        <Card key={mal_id} mal_id={mal_id} {...otherProps} />
                    ))
                }
            </div>
        </div>
    )
}

export default TopAiringPreview;