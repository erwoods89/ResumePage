import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop";
import MobileNav from "./components/MobileNav";

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <ThemeToggle />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
