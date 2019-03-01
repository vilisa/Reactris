import React, { Component } from 'react';
import './css/info.css';

class Info extends Component {
  paused(){
    if(this.props.state.paused){
      return (
          <span class="blink">
            ||
          </span>
      );
    }
  }

  render() {
    return (
      <div class="info">
        {this.paused()}
        <span class="score">
          Score: 100    Lines: 1
        </span>
      </div>
    );
  }
}

export default Info;