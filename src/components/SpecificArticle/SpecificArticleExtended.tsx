import { Article } from 'components/Articles/articlesArray'
import { Link } from 'react-router-dom'

type Props = {
    id: number
    post: Article
}

const SpecificArticleExtended = ({ post }: Props) => {
    return (
        <>
            <article className="article article-bottom">
                <div className="article__post-content">
                    <div className="post-header">
                        <div className="post-header__date">
                            <span>{post.date}</span>
                            <span>Oct</span>
                        </div>
                        <div className="post-header__info">
                            <h3 className="post-title">
                                <Link to="#" className="title-link">
                                    {post.name1} <i>{post.name2}</i>
                                </Link>
                            </h3>
                            <div className="post-category-author">
                                <div className="post-author">
                                    by{' '}
                                    <Link to="about" className="author-link">
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
                        <Link to="#" className="img-link">
                            <img src={post.image} alt="" />
                        </Link>
                    </div>
                    <div className="article-text indent-from-above">
                        <p className="article-par">
                            <b>
                                <span className="capital-letter ">L</span>
                            </b>{' '}
                            {post.paragraphArticlePage_1}
                        </p>
                    </div>
                    <blockquote className="blockqoute indent-from-above">
                        <i className="blockqoute-par">
                            {post.quoteArticlePage_1}
                        </i>
                    </blockquote>
                    <div className="wrapper-photo-text">
                        <div className="wrapper-photo indent-from-above">
                            <img src={post.imageArticlePage} alt="" />
                        </div>
                        <div className="wrapper-text">
                            <p className="article-par indent-from-above">
                                {post.paragraphArticlePage_2}
                            </p>
                        </div>
                        <blockquote className="blockqoute indent-from-above">
                            <i className="blockqoute-par">
                                {post.quoteArticlePage_2}
                            </i>
                        </blockquote>
                    </div>
                </div>
            </article>
        </>
    )
}

export default SpecificArticleExtended
