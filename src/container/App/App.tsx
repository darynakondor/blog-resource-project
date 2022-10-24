import { useState } from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import './App.scss'
import { omit } from 'lodash'
import Footer from 'container/Footer/Footer'

type PostsFavoriteProps = {
    [id: number]: number
}
type SpecificArticleProps = {
    [id: number]: number
}

type PostsLikeStateProps = {
    [id: number]: boolean
}

const App = () => {
    const [postsInFavorite, setPostsInFavorite] = useState<PostsFavoriteProps>(
        {}
    )
    const [specificArticle, setSpecificArticle] =
        useState<SpecificArticleProps>({})
    const addPostToFavorite = (id: number) => {
        setPostsInFavorite((prevState: PostsFavoriteProps) => ({
            ...prevState,
            [id]: prevState[id],
        }))
    }
    const showArticlePage = (id: number) => {
        setSpecificArticle((prevState: SpecificArticleProps) => ({
            [id]: prevState[id],
        }))
    }
    const removePostFromFavorite = (id: number) => {
        setPostsInFavorite((prevState: PostsFavoriteProps) =>
            omit(prevState, [id])
        )
    }
    const [postsLikeState, setPostsLikeState] = useState<PostsLikeStateProps>(
        {}
    )
    const toggleLiked = (id: number, isLiked: boolean) => {
        setPostsLikeState((prevState: PostsLikeStateProps) => ({
            ...prevState,
            [id]: isLiked ? false : true,
        }))
    }

    return (
        <>
            <Header />
            <Main
                postsLikeState={postsLikeState}
                toggleLiked={toggleLiked}
                addPostToFavorite={addPostToFavorite}
                removePostFromFavorite={removePostFromFavorite}
                postsInFavorite={postsInFavorite}
                showArticlePage={showArticlePage}
                specificArticle={specificArticle}
            />
            <Footer />
        </>
    )
}

export default App
