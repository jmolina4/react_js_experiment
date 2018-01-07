import React, { Component } from 'react';
import './DogList.css';
import dog from './dog.jpg'
import pastor from './pastor.jpg'

class DogList extends Component {
  render() {
    return (
      <div class="container">
      <p class="title is-1 is-spaced is-centered">Title 1</p>
      <div class="columns is-gapless is-multiline">
        <div class="column is-one-quarter">
          <img src={dog} alt={"dog"}/>
        </div>
        <div class="column is-one-quarter">
          <img src={pastor} alt={"dog"}/>
        </div>
        <div class="column is-one-quarter">
          <img src={pastor} alt={"dog"}/>
        </div>
        <div class="column is-one-quarter">
          <img src={pastor} alt={"dog"}/>
        </div>
        <div class="column is-one-quarter">
          <img src={pastor} alt={"dog"}/>
        </div>
      </div>
      </div>
    );
  }
}

export default DogList;
