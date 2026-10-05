import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <header className="header">
      <h1>Mini Movie Manager</h1>
      <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Đổi giao diện">
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </button>
    </header>
  );
}
