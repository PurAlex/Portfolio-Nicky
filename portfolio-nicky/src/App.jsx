import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import "./styles/index.css";

const App = () => {
  return (
    <div>
      <Header />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
