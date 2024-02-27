import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import MainLayout from '../layouts/MainLayout';
import {MovieDetailsPage} from "../pages/MovieDetailsPage.jsx";
import {MoviesCastPage} from "../pages/MoviesCastPage.jsx";
import {MovieReviewsPage} from "../pages/MovieReviewsPage.jsx";

function App() {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/movies" element={<MoviesPage/>}/>
                <Route path="/movies/:movieId" element={<MovieDetailsPage/>}>
                    <Route path="cast" element={<MoviesCastPage/>}/>
                    <Route path="reviews" element={<MovieReviewsPage/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
