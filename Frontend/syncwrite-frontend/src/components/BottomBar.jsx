import { useTheme } from "../contexts/ThemeContext";

export default function BottomBar() {
  const { darkMode } = useTheme();
  return (
    <footer className="fixed -bottom-1 left-0 right-0 z-40">
      {/* Gradient line */}
      <div
        className={`h-px ${
          darkMode
            ? " bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-500"
            : "bg-gray-300"
        }`}
      />

      <div
        className={`${
          darkMode ? "bg-[#0B0B0B]" : "bg-[#FFFFFF] border-gray-200"
        } `}
      >
        <div
          className={`max-w-7xl mx-auto px-8 py-3 flex justify-between text-sm ${darkMode?"text-gray-300" :"text-gray-800"} `}
        >
          <div className="font-medium">📄 Docs</div>
          <div>Built with simplicity in mind.</div>
        </div>
      </div>
    </footer>
  );
}
