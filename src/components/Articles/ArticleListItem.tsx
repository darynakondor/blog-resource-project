import { Link } from 'react-router-dom'
import { MdFavoriteBorder } from '@react-icons/all-files/md/MdFavoriteBorder'
import { MdFavorite } from '@react-icons/all-files/md/MdFavorite'

type ArticlesProps = {
    id: number
    name1: string
    name2: string
    author: string
    category: string
    date: number
    image: string
    text: string
    numberOfComments: number
    goToPageCategory: string
    addPostToFavorite: (id: number) => void
    removePostFromFavorite: (id: number) => void
    toggleLiked: (id: number, isLiked: boolean) => void
    isLiked?: boolean
    showArticlePage: (id: number) => void
}

const ArticleListItem = ({
    id,
    name1,
    name2,
    author,
    category,
    date,
    image,
    text,
    numberOfComments,
    goToPageCategory,
    addPostToFavorite,
    removePostFromFavorite,
    toggleLiked,
    isLiked = false,
    showArticlePage,
}: ArticlesProps) => {
    return (
        <article className="article">
            <div className="article__post-content">
                <div className="post-header">
                    <div className="post-header__date">
                        <span>{date}</span>
                        <span>Oct</span>
                    </div>
                    <div className="post-header__info">
                        <h3 className="post-title">
                            <Link
                                onClick={() => showArticlePage(id)}
                                to={`post/${id}`}
                                className="title-link"
                            >
                                {name1} <i>{name2}</i>
                            </Link>
                        </h3>
                        <div className="post-category-author">
                            <div className="post-author">
                                by{' '}
                                <Link to="about" className="author-link">
                                    {author}
                                </Link>
                            </div>
                            <div className="post-category">
                                <Link
                                    to={goToPageCategory}
                                    className="category-link"
                                >
                                    {category}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post-img">
                    <Link
                        onClick={() => showArticlePage(id)}
                        to={`post/${id}`}
                        className="img-link"
                    >
                        <img src={image} alt="" />
                    </Link>
                </div>
                <div className="post-description">
                    <div className="post-description__text">{text}</div>
                    <div className="post-description__link-like">
                        <Link
                            onClick={() => showArticlePage(id)}
                            to={`post/${id}`}
                            className="link"
                        >
                            <span className="btn-continue-reading">
                                Continue reading
                                <span className="btn-continue-reading__hover">
                                    Continue reading
                                </span>
                            </span>
                        </Link>
                        <div
                            className="like"
                            onClick={() => toggleLiked(id, isLiked)}
                        >
                            {isLiked ? (
                                <div onClick={() => removePostFromFavorite(id)}>
                                    <MdFavorite />
                                </div>
                            ) : (
                                <div onClick={() => addPostToFavorite(id)}>
                                    <MdFavoriteBorder />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="post-description__comments">
                        <div className="comments">
                            {numberOfComments} Comments
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ArticleListItem
