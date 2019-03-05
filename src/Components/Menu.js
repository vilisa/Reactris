import React, { Component } from 'react';
import Actions from '../Actions/Actions.js';
import Settings from '../Settings/Settings.js';
import './css/Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
        <div className="menu">
          width: {Settings.GAME_WIDTH}
          <br/>
          height: {Settings.GAME_HEIGHT}
        </div>
      </div>
    );
  }
}

export default Menu;