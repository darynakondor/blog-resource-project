import { Article } from '../../components/Articles/articlesArray'
import FavoriteArticlesList from 'components/Favorite/FavoriteArticlesList'
import FavoriteArticleListExtended from 'components/Favorite/FavoriteArticleListExtended'

type Props = {
    addPostToFavorite: (id: number) => void
    removePostFromFavorite: (id: number) => void
    postsInFavorite: {
        [id: number]: number
    }
    articlesObject?: {
        [id: number]: Article
    }
    ArticleItem?: {}
    postsLikeState: {
        [id: number]: boolean
    }
    toggleLiked: (id: number, isLiked: boolean) => void
}

const FavoritePage = ({
    addPostToFavorite,
    removePostFromFavorite,
    postsInFavorite,
    postsLikeState,
    toggleLiked,
}: Props) => {
    return (
        <>
            <div className="title-bg">
                <h1 className="title">Your Favorite Posts</h1>
            </div>
            <FavoriteArticlesList
                postsInFavorite={postsInFavorite}
                ArticleItem={FavoriteArticleListExtended}
                addPostToFavorite={addPostToFavorite}
                removePostFromFavorite={removePostFromFavorite}
                postsLikeState={postsLikeState}
                toggleLiked={toggleLiked}
            />
        </>
    )
}

export default FavoritePage
