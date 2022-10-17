import ArticlesList from '../../components/Articles/ArticlesList'
import SlideList from '../../components/Slider/SlideList'
import { Routes, Route, Navigate } from 'react-router-dom'
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
    addPostToFavorite: (id: number) => void
    removePostFromFavorite: (id: number) => void
    postsInFavorite: {
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
                            path="/category/living/category/living"
                            element={<Navigate to="/category/living" replace />}
                        />
                        <Route
                            path="/category/culture/category/culture"
                            element={
                                <Navigate to="/category/culture" replace />
                            }
                        />
                        <Route
                            path="/category/events/category/events"
                            element={<Navigate to="/category/events" replace />}
                        />
                        <Route
                            path="category/lifestyle/category/lifestyle"
                            element={
                                <Navigate to="/category/lifestyle" replace />
                            }
                        />
                        <Route
                            path="/category/travel/category/travel"
                            element={<Navigate to="/category/travel" replace />}
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
                                    postsInFavorite={postsInFavorite}
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
