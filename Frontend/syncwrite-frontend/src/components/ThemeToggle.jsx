import { useTheme } from "../contexts/ThemeContext";
export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`h-9 w-9 rounded-full flex items-center justify-center
                border border-yellow-400 text-yellow-400
                 ${
                   darkMode ? " hover:bg-white" : ""
                 }transition aria-label="Toggle Dark Mode`}
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}
