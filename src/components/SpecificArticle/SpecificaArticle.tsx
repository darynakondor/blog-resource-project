import { keys } from 'lodash'
import articlesArray, {
    getArticleObject,
    Article,
} from '../Articles/articlesArray'
import SpecificArticleListExtended from './SpecificArticleExtended'
import './SpecificArticle.scss'
import Reviews from 'components/Reviews/Reviews'
import ScrollToTop from 'components/ScrollToTop/ScrollToTop'

type Props = {
    postsInFavorite: {
        [id: number]: number
    }
    articlesObject?: {
        [id: number]: Article
    }
    ArticleItem?: any
}

const SpecificArticle = ({
    postsInFavorite,
    articlesObject = getArticleObject(articlesArray),
    ArticleItem = SpecificArticleListExtended,
}: Props) => {
    return (
        <section className="section-article grid">
            <ScrollToTop />
            <div className="article-wrapper article-item pages-content">
                {keys(postsInFavorite).map((postId) => (
                    <ArticleItem
                        key={postId}
                        post={articlesObject[parseInt(postId)]}
                    />
                ))}
                <Reviews />
            </div>
        </section>
    )
}
export default SpecificArticle
