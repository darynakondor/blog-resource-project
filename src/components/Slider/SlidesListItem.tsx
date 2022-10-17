import { Link } from 'react-router-dom'

type SlidePrors = {
    id: number
    name1: string
    name2: string
    date: number
    image: string
    text: string
    showArticlePage: (id: number) => void
}

const SlidesListItem = ({
    id,
    name1,
    name2,
    date,
    image,
    text,
    showArticlePage,
}: SlidePrors) => {
    return (
        <div className="slide">
            <img src={image} alt="" className="slide__img" />
            <div className="slide-info">
                <div className="slide__date-title">
                    <div className="slide-date">
                        <span>{date}</span>
                        <span>Oct</span>
                    </div>
                    <div className="slide-title">
                        <Link
                            to={`post/${id}`}
                            onClick={() => showArticlePage(id)}
                            className="title-link"
                        >
                            <h3 className="title">
                                {name1} <i>{name2}</i>
                            </h3>
                        </Link>
                    </div>
                </div>
                <div className="slide__text">
                    <div className="text">{text}</div>
                    <Link
                        to={`post/${id}`}
                        onClick={() => showArticlePage(id)}
                        className="btn-continue-reading"
                    >
                        <span>Continue reading</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SlidesListItem
