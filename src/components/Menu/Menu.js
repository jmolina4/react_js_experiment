import React, { Component } from 'react';
import logo from '../../logo.png';

import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src={logo} className="App-logo" alt="logo" />
              </a>              
            </div>
            <div id="navbarMenuHeroB" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item is-active">
                  Home
                </a>
                <a class="navbar-item">
                  Examples
                </a>
                <a class="navbar-item">
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;
