import { useEffect, useState } from "react";
import { fetchReviewsById } from "../../services/api";
import { useParams } from "react-router-dom";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetchReviewsById(movieId);
      setReviews(response);
    };

    fetchReviews();
  }, [movieId]);

  if (!reviews) return <h2 className="loader">Loading...</h2>;

  if (!reviews?.length) {
    return <h2 className={s.noContent}>There are no reviews!</h2>;
  }

  return (
    <ul className={s.list}>
      {reviews?.map((review) => (
        <li key={review.id}>
          <h2 className={s.title}>Author: {review.author}</h2>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
