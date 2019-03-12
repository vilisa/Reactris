import React, { Component } from 'react';
import './css/info.css';

class Info extends Component {
  paused(){
    if(this.props.state.paused){
      return (
          <span className="blink">
            ||
          </span>
      );
    }
  }

  render(){
    return(
      <div className="info">
        {this.paused()}
        <span className="score">
          Score: {this.props.state.score}    Lines: {this.props.state.linesCleared}
        </span>
      </div>
    );
  }
}

export default Info;