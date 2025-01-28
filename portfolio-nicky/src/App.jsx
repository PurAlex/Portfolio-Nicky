import React from "react";
import { Header, Hero, Projects, Footer } from "./components";
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
