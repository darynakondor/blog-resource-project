import { Article } from '../../components/Articles/articlesArray'
import SpecificaArticle from 'components/SpecificArticle/SpecificaArticle'
import SpecificArticleExtended from 'components/SpecificArticle/SpecificArticleExtended'

type Props = {
    postsInFavorite: {
        [id: number]: number
    }
    articlesObject?: {
        [id: number]: Article
    }
    ArticleItem?: {}
}

const ArticlePage = ({ postsInFavorite }: Props) => {
    return (
        <>
            <SpecificaArticle
                postsInFavorite={postsInFavorite}
                ArticleItem={SpecificArticleExtended}
            />
        </>
    )
}

export default ArticlePage
