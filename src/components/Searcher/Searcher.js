import React, { Component } from 'react';
import './Searcher.css';

class Searcher extends Component {
  render() {
    return (
        <div class="hero-body">
          <div class="container">
            <div class="searcher field is-grouped is-grouped-centered">
              <p class="control">
                <input class="input is-rounded is-large" type="text" placeholder="example: 'Toby'"/>
              </p>
              <p class="control">
                <a class="button is-warning is-large">
                  Search
                </a>
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default Searcher;
