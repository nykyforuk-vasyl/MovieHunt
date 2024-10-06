import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomaPage.jsx";
import { Suspense, lazy } from "react";
import "./App.css";
const Navigation = lazy(() => import("./components/Navigation/Navigation.jsx"));
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage.jsx")
);
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage.jsx"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast.jsx"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews.jsx")
);

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
