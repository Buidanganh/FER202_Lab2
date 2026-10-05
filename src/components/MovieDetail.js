import { useEffect } from 'react';

export default function MovieDetail({ movie, onClose }) {
  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="movie-detail" role="dialog" aria-modal="true" aria-labelledby="movie-detail-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Đóng">×</button>
        <h3>Movie Details</h3>

          <div><dt>Title: </dt><dd>{movie.title}</dd></div>
          <div><dt>Year: </dt><dd>{movie.year}</dd></div>
          <div><dt>Rating: </dt><dd>{movie.rating.toFixed(1)}</dd></div>
          <div><dt>Director: </dt><dd>{movie.director}</dd></div>
          <div><dt>Duration: </dt><dd>{movie.duration} minutes</dd></div>
          <p> Description : <dd>{movie.description}</dd></p>
      </section>
    </div>
  );
}
