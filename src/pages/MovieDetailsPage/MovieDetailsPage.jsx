import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
  Navigate,
} from "react-router-dom";
import { useEffect, useState, Suspense, useRef } from "react";
import { fetchMoviesById } from "../../services/api";
import clsx from "clsx";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };

  const location = useLocation();
  const goBack = useRef(location.state ?? "/");
  const { movieId } = useParams();

  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        setLoading(true);
        const response = await fetchMoviesById(movieId);
        setFilm(response);
      } catch (error) {
        console.error("Error fetching movie:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilm();
  }, [movieId]);

  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <main>
      <Link className={`${s.link} ${s.bag}`} to={goBack.current}>
        Go back
      </Link>

      <div className={s.wrapper}>
        <div className={s.wrap}>
          <img
            className={s.img}
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                : defaultImg
            }
            alt="poster"
            width={326}
          />

          <div className={s.wrapText}>
            <h2 className={s.title}>
              {film.title} ({film.release_date.slice(0, 4)})
            </h2>

            <div className={s.div}>
              <div>
                <h3 className={s.subtitle}>User Score:</h3>
                <p className={s.text}>{film.popularity}%</p>

                <h3 className={s.subtitle}>Release date: </h3>
                <p className={s.text}>{film.release_date}</p>
              </div>

              <div>
                <h3 className={s.subtitle}>Reating: </h3>
                <p className={s.text}>{film.vote_average}</p>

                <h3 className={s.subtitle}>Genres</h3>
                <p className={s.text}>
                  {film.genres.map((genre) => genre.name).join(", ")}
                </p>
              </div>
            </div>

            <h3 className={s.subtitle}>Overview</h3>
            <p>{film.overview}</p>
          </div>
        </div>

        <div>
          <h3 className={s.navTitle}>Additional information</h3>
          <ul className={s.list}>
            <li>
              <NavLink className={buildLinkClass} to="cast">
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink className={buildLinkClass} to="reviews">
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <Suspense fallback={<h2 className="loading">Loading...</h2>}>
        {location.pathname === `/movies/${movieId}` && (
          <Navigate to="cast" replace />
        )}
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetailsPage;
