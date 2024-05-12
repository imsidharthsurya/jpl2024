import React from 'react';
import Header from './components/Header';
import Comingsoon from './components/Comingsoon';
import TeamList from './components/TeamList';
import PlayerList from './components/PlayerList';
import Footer from './components/Footer';
const App = () => {
  

  return (
    <div>
      <Header/>
      <Comingsoon/>
      <TeamList/>
      <PlayerList/>
      <Footer/>
    </div>
  );
};

export default App;
