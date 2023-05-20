import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Features from "./Components/Features";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Features />
      </main>
    </>
  );
};

export default App;
