import { fetchMovies } from "../../services/api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import { useEffect, useState } from "react";

const HomaPage = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetchFilms = async () => {
      const response = await fetchMovies();
      setFilms(response);
    };

    fetchFilms();
  }, []);

  return (
    <>
      <MovieList movies={films} />
    </>
  );
};

export default HomaPage;
