export default function SearchBar({ value, onChange }) {
  return (
    <label className="search-bar">
      <span className="sr-only">Tìm tên phim</span>
      <input type="search" value={value} onChange={(event) => onChange(event.target.value)} placeholder="Tìm tên phim..." />
    </label>
  );
}
