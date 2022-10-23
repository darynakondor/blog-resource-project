import { MdFavoriteBorder } from '@react-icons/all-files/md/MdFavoriteBorder'
import { MdFavorite } from '@react-icons/all-files/md/MdFavorite'
import { Article } from 'components/Articles/articlesArray'
import { Link } from 'react-router-dom'

type Props = {
    id: number
    toggleLiked: (id: number, isLiked: boolean) => void
    addPostToFavorite: (id: number) => void
    removePostFromFavorite: (id: number) => void
    isLiked?: boolean
    post: Article
}

const FavoriteArticleListExtended = ({
    addPostToFavorite,
    removePostFromFavorite,
    toggleLiked,
    isLiked = true,
    post,
}: Props) => {
    return (
        <>
            <article className="article">
                <div className="article__post-content">
                    <div className="post-header">
                        <div className="post-header__date">
                            <span>{post.date}</span>
                            <span>Oct</span>
                        </div>
                        <div className="post-header__info">
                            <h3 className="post-title">
                                <Link
                                    to={`/post/${post.id}`}
                                    className="title-link"
                                >
                                    {post.name1} <i>{post.name2}</i>
                                </Link>
                            </h3>
                            <div className="post-category-author">
                                <div className="post-author">
                                    by{' '}
                                    <Link to="/about" className="author-link">
                                        {post.author}
                                    </Link>
                                </div>
                                <div className="post-category">
                                    <Link
                                        to={post.goToPageCategory}
                                        className="category-link"
                                    >
                                        {post.category}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="post-img">
                        <Link to={`/post/${post.id}`} className="img-link">
                            <img src={post.image} alt="" />
                        </Link>
                    </div>
                    <div className="post-description">
                        <div className="post-description__text">
                            {post.text}
                        </div>
                        <div className="post-description__link-like">
                            <Link to={`/post/${post.id}`} className="link">
                                <span className="btn-continue-reading">
                                    Continue reading
                                    <span className="btn-continue-reading__hover">
                                        Continue reading
                                    </span>
                                </span>
                            </Link>
                            <div
                                className="like"
                                onClick={() => toggleLiked(post.id, isLiked)}
                            >
                                {isLiked ? (
                                    <div
                                        onClick={() =>
                                            removePostFromFavorite(post.id)
                                        }
                                    >
                                        <MdFavorite />
                                    </div>
                                ) : (
                                    <div
                                        onClick={() =>
                                            addPostToFavorite(post.id)
                                        }
                                    >
                                        <MdFavoriteBorder />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="post-description__comments">
                            <div className="comments-link">
                                {post.numberOfComments} Comments
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default FavoriteArticleListExtended
