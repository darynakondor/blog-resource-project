import { keys } from 'lodash'
import articlesArray, {
    getArticleObject,
    Article,
} from '../Articles/articlesArray'
import FavoriteArticleListExtended from './FavoriteArticleListExtended'
import './Favorite.scss'

type Props = {
    toggleLiked: (id: number, isLiked: boolean) => void
    postsLikeState: {
        [id: number]: boolean
    }
    addPostToFavorite: (id: number) => void
    removePostFromFavorite: (id: number) => void
    postsInFavorite: {
        [id: number]: number
    }
    articlesObject?: {
        [id: number]: Article
    }
    ArticleItem?: any
}

const FavoriteArticlesList = ({
    toggleLiked,
    postsLikeState,
    addPostToFavorite,
    removePostFromFavorite,
    postsInFavorite,
    articlesObject = getArticleObject(articlesArray),
    ArticleItem = FavoriteArticleListExtended,
}: Props) => {
    return (
        <section className="section-article grid">
            <div className="article-wrapper">
                {keys(postsInFavorite).map((postId) => (
                    <ArticleItem
                        key={postId}
                        post={articlesObject[parseInt(postId)]}
                        addPostToFavorite={addPostToFavorite}
                        removePostFromFavorite={removePostFromFavorite}
                        toggleLiked={toggleLiked}
                        isLiked={postsLikeState[1]}
                    />
                ))}
            </div>
        </section>
    )
}

export default FavoriteArticlesList
