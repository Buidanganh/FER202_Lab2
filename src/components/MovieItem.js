import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';

export default function MovieItem({ movie, isFavorite, onToggleFavorite, onSelect }) {
  return (
    <article className="movie-item" role="listitem">
      <div className="movie-item__info">
        <h2>{movie.title}</h2>
        <span>{movie.genre}</span>
        <span>{movie.year}</span>
        <span>★ {movie.rating.toFixed(1)}</span>
      </div>
      <div className="movie-item__actions">
        <button
          className={`favorite-button ${isFavorite ? 'favorite-button--active' : ''}`}
          type="button"
          onClick={() => onToggleFavorite(movie.id)}
          aria-pressed={isFavorite}
        >
          {isFavorite ? <FaStar aria-hidden="true" /> : <CiStar aria-hidden="true" />}
          {isFavorite ? 'Bỏ thích' : 'Yêu thích'}
        </button>
        <button className="text-button" type="button" onClick={() => onSelect(movie)}>Chi tiết</button>
      </div>
    </article>
  );
}
