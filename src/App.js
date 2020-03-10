import React from 'react';
import Header from "./Components/Header"
import Masthead from "./Components/Masthead"
import BashInfo from "./assets/the-bash.png"
import DinnerInfo from "./assets/awards-bash.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Masthead></Masthead>
      <div className="App__text">
        <h1 className="App__header1">Join Us In Celebration</h1>
        <h2 className="App__header2">Friday, April 24, 2020</h2>
        <h2 className="App__header2">Dock5 @ Union Market</h2>
        <p className="App__p">
          Arbor Day Bash: Celebrating the 2020 Canopy Awards is Casey Trees’ flagship event highlighting the accomplishments
          of those working to enhance DC’s tree canopy and make the city we love more livable for us all. There’s no better way to celebrate Arbor Day.
        </p>
      </div>
      <img className="App__img" src={BashInfo}></img>
      <img className="App__img" src={DinnerInfo}></img>
    </div>
  );
}

export default App;
