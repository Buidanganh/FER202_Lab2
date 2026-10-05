import MovieItem from './MovieItem';

export default function MovieList({ movies, favorites, onToggleFavorite, onSelect }) {
  if (!movies.length) return <p className="empty-state">Không tìm thấy phim phù hợp.</p>;

  return (
    <div className="movie-list" role="list">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          isFavorite={favorites.includes(movie.id)}
          onToggleFavorite={onToggleFavorite}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
