import React, { Component } from 'react';
import './Reactris.css';
import Constants from './Constants/Constants.js';

class Info extends Component {
  paused(){
    if(Constants.states.PAUSED){
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