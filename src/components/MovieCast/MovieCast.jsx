import { useEffect, useState } from "react";
import { fetchCastById } from "../../services/api";
import { useParams } from "react-router-dom";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  useEffect(() => {
    const fetchCast = async () => {
      const response = await fetchCastById(movieId);
      setActors(response);
    };

    fetchCast();
  }, [movieId]);

  const defaultImg =
    "https://dummyimage.com/200x300/cdcdcd/000.jpg&text=No+photo";

  if (!actors) return <h2>Loading...</h2>;

  if (!actors?.length) {
    return <h2>Theres no information!</h2>;
  }

  return (
    <div>
      <ul className={s.list}>
        {actors?.map((actor) => (
          <li className={s.item} key={actor.id}>
            <img
              className={s.img}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : defaultImg
              }
              alt={actor.name}
              width={100}
            />
            <p className={s.text}>{actor.name}</p>
            <p className={s.text}>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
