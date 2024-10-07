import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import MovieList from "../../components/MovieList/MovieList";
import { useMemo } from "react";
import { fetchMoviesSearch } from "../../services/api";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetchMoviesSearch(query);
      setFilms(response);
    };

    fetchMovies();
  }, [query]);

  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      return setSearchParams({});
    }
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
  };

  const filterData = useMemo(
    () =>
      films?.filter((film) =>
        film.title.toLowerCase().includes(query.toLowerCase())
      ) || [],
    [films, query]
  );

  const handleSubmit = (values, { resetForm }) => {
    handleChangeQuery(values.query);
    resetForm();
  };

  return (
    <div>
      <div className={s.div}>
        <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
          <Form>
            <div className={s.formWrapper}>
              <Field className={s.input} name="query" />
              <button className={s.button} type="submit">
                Search
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      {Array.isArray(films) && films.length > 0 && (
        <MovieList movies={filterData} />
      )}
    </div>
  );
};

export default MoviesPage;
