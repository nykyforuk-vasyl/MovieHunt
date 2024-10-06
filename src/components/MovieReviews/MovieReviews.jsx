import { useEffect, useState } from "react";
import { fetchReviewsById } from "../../services/api";
import { useParams } from "react-router-dom";

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

  if (!reviews) return <h2>Loading...</h2>;

  if (!reviews?.length) {
    return <h2>There are no reviews!</h2>;
  }

  return (
    <div>
      <ul>
        {reviews?.map((review) => (
          <li key={review.id}>
            <h2>Author: {review.author}</h2>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
