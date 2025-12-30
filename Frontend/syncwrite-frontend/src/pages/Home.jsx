import Navbar from "../components/Navbar";
import BottomBar from "../components/BottomBar";
import Features from "../components/Features";
import Hero from "../components/Hero";
import { useTheme } from "../contexts/ThemeContext";

export default function Home() {
  const { darkMode, setDarkMode } = useTheme();
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <BottomBar />
    </>
  );
}
