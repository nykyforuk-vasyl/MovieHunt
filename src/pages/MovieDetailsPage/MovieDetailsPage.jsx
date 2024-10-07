import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
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
  useEffect(() => {
    const fetchFilm = async () => {
      const response = await fetchMoviesById(movieId);
      setFilm(response);
    };

    fetchFilm();
  }, [movieId]);

  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  if (!film) return <p>Loading...</p>;
  return (
    <div>
      <Link className={s.link} to={goBack.current}>
        Go back
      </Link>

      <div className={s.wrapper}>
        <div>
          <img
            className={s.img}
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                : defaultImg
            }
            alt="poster"
            width={250}
          />
        </div>

        <div className={s.divText}>
          <h2 className={s.title}>
            {film.title} ({film.release_date.slice(0, 4)})
          </h2>
          <p>User Score: {film.popularity}%</p>
          <h3 className={s.subtitle}>Overview</h3>
          <p>{film.overview}</p>
          <h3 className={s.subtitle}>Genres</h3>
          <p>{film.genres.map((genre) => genre.name).join(", ")}</p>
        </div>

        <div>
          <h3 className={s.subtitle}>Additional information</h3>
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

      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
