import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { useEffect, useState, Suspense, useRef } from "react";
import { fetchMoviesById } from "../../services/api";

const MovieDetailsPage = () => {
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
      <Link to={goBack.current}>Go back</Link>
      <img
        src={
          film.poster_path
            ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
            : defaultImg
        }
        alt="poster"
        width={250}
      />
      <div>
        <h2>
          {film.title} ({film.release_date.slice(0, 4)})
        </h2>
        <p>User Score: {film.popularity}%</p>
        <h3>Overview</h3>
        <p>{film.overview}</p>
        <h3>Genres</h3>
        <p>{film.genres.map((genre) => genre.name).join(", ")}</p>
      </div>
      <hr />

      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <hr />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
