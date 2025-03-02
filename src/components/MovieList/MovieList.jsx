import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  console.log({ movies });

  if (!movies) return;

  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  return (
    <ul className={s.list}>
      {movies?.map((movie) => (
        <li key={movie.id}>
          <Link
            className={s.item}
            to={`/movies/${movie.id.toString()}`}
            state={location}
          >
            <img
              className={s.img}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : defaultImg
              }
              alt="poster"
              width={130}
            />
            <p className={s.text}>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
