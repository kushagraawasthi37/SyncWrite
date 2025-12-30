import { useTheme } from "../contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-colors
        ${
          darkMode
            ? "bg-[#0b0b0b] text-white border-neutral-800"
            : "bg-white text-black border-gray-200"
        }
      `}
    >
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          py-3 sm:py-4
          flex items-center justify-between
        "
      >
        {/* Left */}
        <div className="flex items-center gap-2 font-semibold text-base sm:text-lg">
          📄 Docs
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sign In */}
          <button
            className={`
              rounded-md font-medium transition
              px-2.5 py-1.5 text-xs
              sm:px-3 sm:py-2 sm:text-sm
              md:px-4 md:py-2 md:text-sm
              ${
                darkMode
                  ? "btn-yellow-dark"
                  : "text-gray-600 hover:text-black hover:bg-gray-100"
              }
            `}
          >
            Sign in
          </button>

          {/* Get Started */}
          <button
            className={`
              rounded-md font-medium transition
              px-3 py-1.5 text-xs
              sm:px-4 sm:py-2 sm:text-sm
              md:px-5 md:py-2 md:text-base
              ${darkMode ? "btn-yellow-dark" : "btn-blue-light"}
            `}
          >
            Get started
          </button>

          {/* Theme Toggle */}
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </nav>
  );
}
