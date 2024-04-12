import ArticlesList from '../../components/Articles/ArticlesList'
import SlideList from '../../components/Slider/SlideList'
import { Routes, Route } from 'react-router-dom'
import './Main.scss'
import AboutPage from 'pages/AboutPage/AboutPage'
import CategoryLivingPage from 'pages/CategoryPages/CategoryLivingPage'
import CategoryCulturePage from 'pages/CategoryPages/CategoryCulturePage'
import CategoryEventsPage from 'pages/CategoryPages/CategoryEventsPage'
import CategoryLifestylePage from 'pages/CategoryPages/CategoryLifestylePage'
import CategoryTravelPage from 'pages/CategoryPages/CategoryTravelPage'
import FavoritePage from 'pages/FavoritePage/FavoritePage'
import ArticlePage from 'pages/ArticlePage/ArticlePage'

type Props = {
    goToPagrCategory?: string
    addPostToFavorite: (id: number) => void
    removePostFromFavorite: (id: number) => void
    postsInFavorite: {
        [id: number]: number
    }
    specificArticle: {
        [id: number]: number
    }
    toggleLiked: (id: number, isLiked: boolean) => void
    postsLikeState: {
        [id: number]: boolean
    }
    showArticlePage: (id: number) => void
}

const Main = ({
    addPostToFavorite,
    removePostFromFavorite,
    postsInFavorite,
    specificArticle,
    toggleLiked,
    postsLikeState,
    showArticlePage,
}: Props) => {
    return (
        <main className="main">
            <div className="container">
                <div className="wrapper">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <SlideList showArticlePage={showArticlePage} />
                            }
                        />
                    </Routes>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <ArticlesList
                                    showArticlePage={showArticlePage}
                                    addPostToFavorite={addPostToFavorite}
                                    removePostFromFavorite={
                                        removePostFromFavorite
                                    }
                                    postsLikeState={postsLikeState}
                                    toggleLiked={toggleLiked}
                                />
                            }
                        />
                        <Route path="about" element={<AboutPage />} />
                        <Route
                            path="category/living"
                            element={
                                <CategoryLivingPage
                                    addPostToFavorite={addPostToFavorite}
                                    removePostFromFavorite={
                                        removePostFromFavorite
                                    }
                                    postsLikeState={postsLikeState}
                                    toggleLiked={toggleLiked}
                                    showArticlePage={showArticlePage}
                                />
                            }
                        />
                        <Route
                            path="category/culture"
                            element={
                                <CategoryCulturePage
                                    addPostToFavorite={addPostToFavorite}
                                    removePostFromFavorite={
                                        removePostFromFavorite
                                    }
                                    postsLikeState={postsLikeState}
                                    toggleLiked={toggleLiked}
                                    showArticlePage={showArticlePage}
                                />
                            }
                        />
                        <Route
                            path="category/events"
                            element={
                                <CategoryEventsPage
                                    addPostToFavorite={addPostToFavorite}
                                    removePostFromFavorite={
                                        removePostFromFavorite
                                    }
                                    postsLikeState={postsLikeState}
                                    toggleLiked={toggleLiked}
                                    showArticlePage={showArticlePage}
                                />
                            }
                        />
                        <Route
                            path="category/lifestyle"
                            element={
                                <CategoryLifestylePage
                                    addPostToFavorite={addPostToFavorite}
                                    removePostFromFavorite={
                                        removePostFromFavorite
                                    }
                                    postsLikeState={postsLikeState}
                                    toggleLiked={toggleLiked}
                                    showArticlePage={showArticlePage}
                                />
                            }
                        />
                        <Route
                            path="category/travel"
                            element={
                                <CategoryTravelPage
                                    addPostToFavorite={addPostToFavorite}
                                    removePostFromFavorite={
                                        removePostFromFavorite
                                    }
                                    postsLikeState={postsLikeState}
                                    toggleLiked={toggleLiked}
                                    showArticlePage={showArticlePage}
                                />
                            }
                        />
                        <Route
                            path="favorite"
                            element={
                                <FavoritePage
                                    postsInFavorite={postsInFavorite}
                                    addPostToFavorite={addPostToFavorite}
                                    removePostFromFavorite={
                                        removePostFromFavorite
                                    }
                                    postsLikeState={postsLikeState}
                                    toggleLiked={toggleLiked}
                                />
                            }
                        />
                        <Route
                            path="post/:id"
                            element={
                                <ArticlePage
                                    specificArticle={specificArticle}
                                />
                            }
                        />
                    </Routes>
                </div>
            </div>
        </main>
    )
}

export default Main
