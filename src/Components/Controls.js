import React, { Component } from 'react';
import Actions from '../Actions/Actions.js';
import Info from './Info.js';
import './css/Controls.css';

class Controls extends Component {
  render() {
    return (
      <div class="container">
        <div class="buttons">
          <div class="button">
            <button onClick={() => this.props.setStateVariable({paused: Actions.pause(this.props.state)})}></button>
            <div>Pause</div>
          </div>
          <div class="button">
            <button></button>
            <div>Reset</div>
          </div>
        </div>
        <div class="arrows">
          <center>
            <div class="up">
              <button class="arrow-up" onClick={() => this.props.movePiece(Actions.rotate(this.props.state))}></button>
            </div>
            <div class="left-right">
              <button class="arrow-left" onClick={() => this.props.movePiece(Actions.moveLeft(this.props.state))}></button>
              <span class="spacer">
                <i class="up"/>
                <i class="left"/>
                <i class="right"/>
                <i class="down"/>
              </span>
              <button class="arrow-right" onClick={() => this.props.movePiece(Actions.moveRight(this.props.state))}></button>
            </div>
            <div class="down">
              <button class="arrow-down" onClick={() => this.props.movePiece(Actions.moveDown(this.props.state))}></button>
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default Controls;