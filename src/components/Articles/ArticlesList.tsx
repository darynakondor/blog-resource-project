import { useState } from 'react'
import articlesArray from './articlesArray'
import ArticleListItem from './ArticleListItem'
import './ArticlesList.scss'

type Props = {
    addPostToFavorite: (id: number) => void
    removePostFromFavorite: (id: number) => void
    toggleLiked: (id: number, isLiked: boolean) => void
    postsLikeState: {
        [id: number]: boolean
    }
    showArticlePage: (id: number) => void
}
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
}
const ArticlesList = ({
    addPostToFavorite,
    removePostFromFavorite,
    toggleLiked,
    postsLikeState,
    showArticlePage,
}: Props) => {
    const [articles, setAsrticles] = useState<number>(6)
    const showMore = () => setAsrticles((prevState: number) => prevState + 6)
    const [hidenButton, setHidenButton] = useState<string>('block')
    const clickBtn = () =>
        setHidenButton(() => (articles === 6 ? 'none' : 'block'))
    return (
        <section className="section-article grid">
            <div className="article-wrapper">
                {articlesArray
                    .slice(0, articles)
                    .map(
                        ({
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
                        }: ArticlesProps) => (
                            <div key={id}>
                                <ArticleListItem
                                    id={id}
                                    name1={name1}
                                    name2={name2}
                                    author={author}
                                    category={category}
                                    date={date}
                                    image={image}
                                    text={text}
                                    numberOfComments={numberOfComments}
                                    goToPageCategory={goToPageCategory}
                                    isLiked={postsLikeState[id]}
                                    toggleLiked={toggleLiked}
                                    addPostToFavorite={addPostToFavorite}
                                    removePostFromFavorite={
                                        removePostFromFavorite
                                    }
                                    showArticlePage={showArticlePage}
                                />
                            </div>
                        )
                    )}
            </div>
            <div
                onClick={clickBtn}
                style={{
                    display: `${hidenButton}`,
                }}
                className="show-more-pagination"
            >
                <button onClick={showMore} className="show-more-btn">
                    <span className="show-more-text">Older Posts</span>
                </button>
            </div>
        </section>
    )
}

export default ArticlesList
