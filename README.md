# Movie Hunt

Movie Hunt is a web application for searching movies using the TMDB API. Users can browse trending movies, search by keywords, view detailed information, cast lists, and reviews.

# 🚀 Features

✅ Trending Movies – The homepage displays a list of today's most popular movies.

✅ Movie Search – Users can search for movies by keywords.

✅ Movie Details – View full movie details, including description, rating, and release date.

✅ Cast Information – Displays the list of actors who starred in the movie.

✅ User Reviews – Browse user reviews for selected movies.

✅ Navigation – Simple and intuitive interface with easy-to-use menus.

✅ Responsive Design – Optimized for mobile devices for a seamless experience.

# 📌 Application Navigation

/ – HomePage: Displays a list of trending movies.

/movies – MoviesPage: Search for movies by keyword.

/movies/:movieId – MovieDetailsPage: View detailed movie information.

/movies/:movieId/cast – MovieCast: Displays the list of actors (renders on the movie details page).

/movies/:movieId/reviews – MovieReviews: Shows user reviews (renders on the movie details page).

NotFoundPage: Handles invalid routes with a link back to the homepage.

# 📂 Project Structure

src/pages/ – Contains page components: HomePage, MoviesPage, MovieDetailsPage, NotFoundPage.

src/components/ – Contains MovieCast and MovieReviews components, which are rendered on the MovieDetailsPage.

src/components/Navigation.js – Navigation menu component with links.

src/components/MovieList.js – Renders the movie list (used on HomePage and MoviesPage).

# 🔧 Technology Stack

React – Library for building the user interface.

React Router DOM – Handles navigation and routing.

Axios – For making HTTP requests to the TMDB API.

REST API – Fetches movie data.

CSS – For styling and responsive design.

# 📥 Installation & Setup

Clone the repository:
git clone https://github.com/your-username/movie-hunt.git
cd movie-hunt

Install dependencies:
npm install

Start the development server:
npm run dev

---

# Movie Hunt

Movie Hunt - це веб-додаток для пошуку фільмів за допомогою API сервісу TMDB. Користувач може переглядати популярні фільми, здійснювати пошук за ключовими словами, переглядати детальну інформацію, список акторів та відгуки.

# 🚀 Функціональність

✅ Популярні фільми - домашня сторінка відображає список трендових фільмів на сьогодні.

✅ Пошук фільмів - користувач може шукати фільми за ключовими словами.

✅ Деталі фільму - перегляд повної інформації про вибраний фільм, включаючи опис, рейтинг, дату виходу тощо.

✅ Акторський склад - інформація про акторів, які брали участь у зйомках.

✅ Відгуки - перегляд рецензій користувачів на вибраний фільм.

✅ Навігація - простий та інтуїтивно зрозумілий інтерфейс із зручним меню.

✅ Адаптивний дизайн - підтримка мобільних пристроїв для комфортного використання.

# 📌 Навігація по додатку

/ - HomePage: список популярних фільмів.

/movies - MoviesPage: сторінка пошуку фільмів за ключовим словом.

/movies/:movieId - MovieDetailsPage: детальна інформація про фільм.

/movies/:movieId/cast - MovieCast: список акторів (рендериться на сторінці деталей фільму).

/movies/:movieId/reviews - MovieReviews: відгуки користувачів (рендериться на сторінці деталей фільму).

NotFoundPage: обробка некоректних маршрутів, з посиланням на домашню сторінку.

# 📂 Структура проєкту

src/pages/ - компоненти сторінок: HomePage, MoviesPage, MovieDetailsPage, NotFoundPage.

src/components/ - компоненти MovieCast та MovieReviews, що рендеряться на сторінці деталей фільму.

src/components/Navigation.js - компонент меню з навігаційними посиланнями.

src/components/MovieList.js - відображення списку фільмів (використовується на HomePage та MoviesPage).

# 🔧 Технологічний стек

React - бібліотека для створення інтерфейсу користувача.

React Router DOM - маршрутизація.

Axios - для HTTP-запитів до TMDB API.

REST API - отримання інформації про фільми.

CSS - стилізація та адаптивний дизайн.

# 📥 Встановлення та запуск

Клонуйте репозиторій:

git clone https://github.com/your-username/movie-hunt.git
cd movie-hunt

Встановіть залежності:

npm install

Запустіть локальний сервер:

npm run dev
