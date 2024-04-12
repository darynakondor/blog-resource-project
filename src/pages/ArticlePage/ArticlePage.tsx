import { Article } from '../../components/Articles/articlesArray'
import SpecificaArticle from 'components/SpecificArticle/SpecificaArticle'
import SpecificArticleExtended from 'components/SpecificArticle/SpecificArticleExtended'

type Props = {
    specificArticle: {
        [id: number]: number
    }
    articlesObject?: {
        [id: number]: Article
    }
    ArticleItem?: {}
}

const ArticlePage = ({ specificArticle }: Props) => {
    return (
        <>
            <SpecificaArticle
                specificArticle={specificArticle}
                ArticleItem={SpecificArticleExtended}
            />
        </>
    )
}

export default ArticlePage
