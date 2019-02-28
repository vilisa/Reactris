import React, { Component } from 'react';
import './Reactris.css';
import Settings from './Settings/Settings.js';

class Info extends Component {
  paused(){
    if(Settings.states.PAUSED){
      return (
        <div class="paused">
          Paused
        </div>
      );
    }
  }

  render() {
    return (
      <div class="info">
        {this.paused()}
      </div>
    );
  }
}

export default Info;