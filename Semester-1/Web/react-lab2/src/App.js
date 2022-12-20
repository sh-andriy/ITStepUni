import React from 'react';
import './App.css';
import Footer from './Footer';
import Navigation from "./Navigation";
import Carousel from './Carousel';
import Main from './Main';
import NavBar from './NavBar';
import DescriptionCard from './Description';

function App () {
  return (
      <div className="main-container">
        <Navigation />
        <NavBar />
        <Carousel />
        <Main />
        <hr id="app-hr" />
        <DescriptionCard />
        <Footer />
      </div>
  )
}

export default App;