import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import "./styles/index.css";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
