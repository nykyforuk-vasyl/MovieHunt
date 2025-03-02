import { useEffect, useState } from "react";
import { fetchCastById } from "../../services/api";
import { useParams } from "react-router-dom";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const response = await fetchCastById(movieId);
        setActors(response);
      } catch (error) {
        console.error("Error fetching cast:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  const defaultImg =
    "https://dummyimage.com/200x300/cdcdcd/000.jpg&text=No+photo";

  if (loading) return <div className="loading">Loading...</div>;

  if (!actors?.length) {
    return <h2>Theres no information!</h2>;
  }

  return (
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
          />
          <p className={s.subTitle}>{actor.name}</p>
          <p className={s.text}>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
