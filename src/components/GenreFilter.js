export default function GenreFilter({ genres, value, onChange }) {
  return (
    <label className="genre-filter">
      <span className="sr-only">Lọc theo thể loại</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="all">Tất cả thể loại</option>
        {genres.map((genre) => <option key={genre} value={genre}>{genre}</option>)}
      </select>
    </label>
  );
}
