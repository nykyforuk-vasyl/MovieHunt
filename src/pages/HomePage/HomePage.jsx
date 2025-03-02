import { fetchMovies } from "../../services/api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setLoading(true);
        const response = await fetchMovies();
        setFilms(response);
      } catch (error) {
        console.error("Error fetching movie:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <main>
      <MovieList movies={films} />
    </main>
  );
};

export default HomePage;
