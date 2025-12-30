// src/components/Features.jsx
import { useTheme } from "../contexts/ThemeContext";
import { features } from "../data/features.js";

export default function Features() {
  const { darkMode } = useTheme();
  return (
    <section className={`${darkMode ? "bg-[#121212]" : "bg-[#f8fafc]"} py-20 `}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${
              darkMode ? "bg-[#18181b]" : "bg-[#f1f5f9]"
            } p-6 rounded-xl shadow-sm hover:shadow-md transition`}
          >
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3
              className={`${
                darkMode ? "text-[#e5e7eb]" : "text-[#0f172a]"
              } font-semibold text-lg mb-2`}
            >
              {feature.title}
            </h3>
            <p
              className={`${
                darkMode ? "text-[#a1a1aa]" : "text-[#475569]"
              }  text-sm`}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
} //
