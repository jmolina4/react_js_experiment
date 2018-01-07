import React, { Component } from 'react';
import './App.css';

import Menu from '../Menu/Menu';
import Searcher from '../Searcher/Searcher';
import DogList from '../DogList/DogList';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <section class="hero is-fullheight">
          <Menu></Menu>
          <Searcher></Searcher>
        </section>
        <section class="section">
          <DogList></DogList>
        </section>
          <Footer></Footer>
      </div>
    );
  }
}

export default App;
