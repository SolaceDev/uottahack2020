import React from "react";
import Header from "./components/Header";
import Competition from "./components/Competition";
import Team from "./components/Team";
import FeaturedArticles from "./components/FeaturedArticles";
import PastWinners from "./components/PastWinners";
import Diversity from "./components/Diversity";
import Footer from "./components/Footer";
import InTheMoment from "./components/InTheMoment";
import Examples from "./components/Examples";
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Competition />
      <Examples />
      <PastWinners />
      <FeaturedArticles />
      <InTheMoment />
      <Team />
      <Diversity />
      <Footer />
    </div>
  );
}

export default App;
