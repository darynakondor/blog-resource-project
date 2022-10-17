import articlesArray from '../../components/Articles/articlesArray'
import ArticleListItem from '../../components/Articles/ArticleListItem'
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

const CategoryLivingPage = ({
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
        <section className="section-article grid " style={{ paddingTop: '0' }}>
            <div style={style} className="article-wrapper">
                <div className="title-bg">
                    <h1 className="title">Living</h1>
                </div>
                {articlesArray
                    .filter(
                        ({ category }: CategoryProps) => category === 'living'
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

export default CategoryLivingPage