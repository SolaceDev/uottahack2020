import React from 'react';
import Header from './components/Header';
import Competition from './components/Competition';
import Team from './components/Team';
import FeaturedArticles from './components/FeaturedArticles';
import PastWinners from './components/PastWinners';
import Diversity from './components/Diversity';
import Footer from './components/Footer';
import InTheMoment from './components/InTheMoment';
import Examples from './components/Examples';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <main>
          <Competition />
          <Team />
          <FeaturedArticles />
          <PastWinners />
          <Diversity />
          <Examples />
          <InTheMoment />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
