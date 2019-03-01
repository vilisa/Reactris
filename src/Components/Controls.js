import React, { Component } from 'react';
import Actions from '../Actions/Actions.js';
import './css/Controls.css';

class Controls extends Component {
  render() {
    return (
      <div className="container">
        <div className="buttons">
          <div className="button">
            <button onClick={() => this.props.setStateVariable({paused: Actions.pause(this.props.state)})}></button>
            <div>Pause</div>
          </div>
          <div className="button">
            <button></button>
            <div>Reset</div>
          </div>
        </div>
        <div className="arrows">
          <center>
            <div className="up">
              <button className="arrow-up" onClick={() => this.props.movePiece(Actions.rotate(this.props.state))}></button>
            </div>
            <div className="left-right">
              <button className="arrow-left" onClick={() => this.props.movePiece(Actions.moveLeft(this.props.state))}></button>
              <span className="spacer">
                <i className="up"/>
                <i className="left"/>
                <i className="right"/>
                <i className="down"/>
              </span>
              <button className="arrow-right" onClick={() => this.props.movePiece(Actions.moveRight(this.props.state))}></button>
            </div>
            <div className="down">
              <button className="arrow-down" onClick={() => this.props.movePiece(Actions.moveDown(this.props.state))}></button>
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default Controls;