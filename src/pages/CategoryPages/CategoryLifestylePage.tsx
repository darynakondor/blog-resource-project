import articlesArray from '../../components/Articles/articlesArray'
import ArticleListItem from '../../components/Articles/ArticleListItem'
import ScrollToTop from 'components/ScrollToTop/ScrollToTop'
type CategoryProps = {
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
type Props = {
    addPostToFavorite: (id: number) => void
    removePostFromFavorite: (id: number) => void
    toggleLiked: (id: number, isLiked: boolean) => void
    postsLikeState: {
        [id: number]: boolean
    }
    showArticlePage: (id: number) => void
}

const CategoryLifestylePage = ({
    addPostToFavorite,
    removePostFromFavorite,
    toggleLiked,
    postsLikeState,
    showArticlePage,
}: Props) => {
    const style = {
        display: 'grid',
        gridTemplateColumns: '1fr',
    }
    return (
        <section className="section-article" style={{ paddingTop: '0' }}>
            <ScrollToTop />
            <div className="title-bg">
                <h1 className="title">Lifestyle</h1>
            </div>
            <div style={style} className="article-wrapper grid pages-content">
                {articlesArray
                    .filter(
                        ({ category }: CategoryProps) =>
                            category === 'lifestyle'
                    )
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
                        }: CategoryProps) => (
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
        </section>
    )
}
export default CategoryLifestylePage
