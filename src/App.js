import { useMemo, useState } from 'react';
import { movies } from './data/movies';
import Header from './components/Header';
import SearchBar from './components/SeachBar';
import GenreFilter from './components/GenreFilter';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function MovieManager() {
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [favorites, setFavorites] = useState([1, 2, 3, 4]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const genres = useMemo(() => [...new Set(movies.map((movie) => movie.genre))], []);
  const visibleMovies = useMemo(() => {
    const keyword = searchTerm.trim().toLocaleLowerCase('vi');
    const filtered = movies.filter((movie) =>
      (genre === 'all' || movie.genre === genre) && movie.title.toLocaleLowerCase('vi').includes(keyword)
    );
    return [...filtered].sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'year') return b.year - a.year;
      return a.id - b.id;
    });
  }, [genre, searchTerm, sortBy]);

  const toggleFavorite = (id) => setFavorites((current) => current.includes(id)
    ? current.filter((movieId) => movieId !== id)
    : [...current, id]);

  return (
    <main className="movie-manager">
      <div className="movie-manager__panel">
        <Header />
        <section className="movie-manager__content" aria-label="Quản lý phim">
          <div className="movie-controls">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            <GenreFilter genres={genres} value={genre} onChange={setGenre} />
            <label className="sort-select">
              <span className="sr-only">Sắp xếp phim</span>
              <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                <option value="default">Sắp xếp: Mặc định</option>
                <option value="title">Sắp xếp: Tên A-Z</option>
                <option value="rating">Sắp xếp: Điểm cao nhất</option>
                <option value="year">Sắp xếp: Mới nhất</option>
              </select>
            </label>
          </div>
          <p className="movie-summary" aria-live="polite">
            <span>Tổng: <strong>{movies.length}</strong></span>
            <span>Yêu thích: <strong>{favorites.length}</strong></span>
            <span>Đang hiển thị: <strong>{visibleMovies.length}</strong></span>
          </p>
          <MovieList movies={visibleMovies} favorites={favorites} onToggleFavorite={toggleFavorite} onSelect={setSelectedMovie} />
        </section>
      </div>
      {selectedMovie && <MovieDetail movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </main>
  );
}

export default function App() { return <ThemeProvider><MovieManager /></ThemeProvider>; }
