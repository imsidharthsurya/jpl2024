import React from 'react';
import Header from './components/Header';
import Comingsoon from './components/Comingsoon';
import TeamList from './components/TeamList';
import PlayerList from './components/PlayerList';
import Footer from './components/Footer';
import TextScroller from './components/TextScroller';
const App = () => {
  

  return (
    <div>
      <Header/>
      <TextScroller text="Auction on 4th May, 2024 at Mukhiya Ji Hall from 6:00 PM onwards." />
      <Comingsoon/>
      <TeamList/>
      <PlayerList/>
      <Footer/>
    </div>
  );
};

export default App;
