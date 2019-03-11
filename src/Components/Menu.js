import React, { Component } from 'react';
import Actions from '../Actions/Actions.js';
import Settings from '../Settings/Settings.js';
import './css/Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Settings.GAME_WIDTH,
      height: Settings.GAME_HEIGHT,
      tick: Settings.GAME_TICK,
      number: 100
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    let name = event.target.name;
    let value = event.target.value;
    
    this.setState({
      [name]: value
    });
  }

  save(){
    Settings.GAME_WIDTH = parseInt(this.state.width);
    Settings.GAME_HEIGHT = parseInt(this.state.height);
    Settings.GAME_TICK = parseInt(this.state.tick);
    this.props.reset();
    this.props.pause();
  }

  render() {
    return (
      <div className="menu-container">
        <div className="menu">
          <h1>Settings</h1>
          <div className="body">

            <div className="settings">
              <div className="labels">
                <label>width:</label>
                <br/>
                <label>height:</label>
                <br/>
                <label>Tick:</label>
              </div>
              <div className="inputs">
                <div class="number-input">
                  <button onClick={() => this.setState({width: this.state.width - 1})}>-</button>
                  <input
                    name="width"
                    type="number"
                    value={this.state.width}
                    onChange={this.handleChange}
                  />
                  <button onClick={() => this.setState({width: this.state.width + 1})}>+</button>
                </div>
                <div class="number-input">
                  <button onClick={() => this.setState({height: this.state.height - 1})}>-</button>
                  <input
                    name="height"
                    type="number"
                    value={this.state.height}
                    onChange={this.handleChange}
                  />
                  <button onClick={() => this.setState({height: this.state.height + 1})}>+</button>
                </div>
                <div class="number-input">
                  <button onClick={() => this.setState({tick: this.state.tick - 10})}>-</button>
                  <input
                    name="tick"
                    type="number"
                    value={this.state.tick}
                    onChange={this.handleChange}
                  />
                  <button onClick={() => this.setState({tick: this.state.tick + 10})}>+</button>
                </div>
              </div>
            </div>
            
            <div className="controls">
              <button onClick={() => this.save()}>
                Save
              </button>
            </div>
          
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;