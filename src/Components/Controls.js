import React, { Component } from 'react';
import Actions from '../Actions/Actions.js';
import './css/Controls.css';
import Settings from '../Settings/Settings.js';

class Controls extends Component {
  constructor(props) {
    super(props)

    this.state = {
      arrow_up_interval: null,
      arrow_down_interval: null,
      arrow_left_interval: null,
      arrow_right_interval: null
    }
  }

  //start holding
  start(arrow){
    var timeoutID = setInterval(this.holding, Settings.MOVEMENT_INTERVAL, arrow);

    switch(arrow){
      case 'up':
        this.setState({arrow_up_interval: timeoutID});
        break;
      case 'down':
        this.setState({arrow_down_interval: timeoutID});
        break;
      case 'left':
        this.setState({arrow_left_interval: timeoutID});
        break;
      case 'right':
        this.setState({arrow_right_interval: timeoutID});
        break;
      default:
        break;
    }
  }

  //stop holding
  stop(arrow){
    switch(arrow){
      case 'up':
        clearTimeout(this.state.arrow_up_interval);
        break;
      case 'down':
        clearTimeout(this.state.arrow_down_interval);
        break;
      case 'left':
        clearTimeout(this.state.arrow_left_interval);
        break;
      case 'right':
        clearTimeout(this.state.arrow_right_interval);
        break;
      default:
        break;
    }
  }

  //while holding
  holding = (arrow) => {
    switch(arrow){
      case 'up':
        this.props.movePiece(Actions.rotate(this.props.state));
        break;
      case 'down':
        this.props.setState(Actions.moveDown(this.props.state))
        break;
      case 'left':
        this.props.movePiece(Actions.moveLeft(this.props.state))
        break;
      case 'right':
        this.props.movePiece(Actions.moveRight(this.props.state))
        break;
      default:
        break;
    }
  }
  
  render() {
    return (
      <div className="container">
        <div className="buttons">
          <div className="button">
            <button onClick={() => this.props.pause()}></button>
            <div>Pause</div>
          </div>
          <div className="button">
            <button className="reset" onClick={() => this.props.reset()}></button>
            <div>Reset</div>
          </div>
        </div>
        <div className="arrows">
          <center>
            <div className="up">
              <button className="arrow-up" id="arrow-up"
                onClick={() => this.props.movePiece(Actions.rotate(this.props.state))}
                onMouseDown={() => this.start('up')} 
                onMouseUp={() => this.stop('up')}
                ontouchstart={() => this.start('up')}
                ontouchend={() => this.stop('down')}
              />
            </div>
            <div className="left-right">
              <button className="arrow-left"
                onClick={() => this.props.movePiece(Actions.moveLeft(this.props.state))}
                onMouseDown={() => this.start('left')} 
                onMouseUp={() => this.stop('left')}
                />
              <span className="spacer">
                <i className="up"/>
                <i className="left"/>
                <i className="right"/>
                <i className="down"/>
              </span>
              <button className="arrow-right"
                onClick={() => this.props.movePiece(Actions.moveRight(this.props.state))}
                onMouseDown={() => this.start('right')} 
                onMouseUp={() => this.stop('right')}
              />
            </div>
            <div className="down">
              <button className="arrow-down" 
                onClick={() => this.props.setState(Actions.moveDown(this.props.state))}
                onMouseDown={() => this.start('down')}
                onMouseUp={() => this.stop('down')}
              />
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default Controls;