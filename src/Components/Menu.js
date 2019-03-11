import React, { Component } from 'react';
import Actions from '../Actions/Actions.js';
import Settings from '../Settings/Settings.js';
import './css/Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
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
    let width = this.state.width;
    let height = this.state.height;
    let tick = this.state.tick;
    
    if(width >= Settings.MINIMUM_WIDTH){
      Settings.GAME_WIDTH = parseInt(width);
    } else {
      this.setState({msg: 'min width: ' + Settings.MINIMUM_WIDTH});
      return;
    }

    if(height >= Settings.MINIMUM_HEIGHT){
      Settings.GAME_HEIGHT = parseInt(height);
    } else {
      this.setState({msg: 'min height: ' + Settings.MINIMUM_HEIGHT});
      return;
    }

    if(tick >= 0){
      Settings.GAME_TICK = parseInt(tick);
    } else {
      this.setState({msg: 'min tick: ' + 0});
      return;
    }
    this.props.reset();
  }

  increase(setting){
    switch(setting){
      case 'width':
        this.setState({width: this.state.width + 1});
        break;
      case 'height':
        this.setState({height: this.state.height + 1});
        break;
      case 'tick':
        this.setState({tick: this.state.tick + 10});
        break;
      default:
        break;
    }
  }

  decrease(setting){
    switch(setting){
      case 'width':
        this.setState({width: this.state.width - 1});
        if(this.state.width <= Settings.MINIMUM_WIDTH){
          this.setState({width: Settings.MINIMUM_WIDTH});
        }
        break;
      case 'height':
        this.setState({height: this.state.height - 1});
        if(this.state.height <= Settings.MINIMUM_HEIGHT){
          this.setState({height: Settings.MINIMUM_HEIGHT});
        }
        break;
      case 'tick':
        this.setState({tick: this.state.tick - 10});
        if(this.state.tick <= 0){
          this.setState({tick: 0});
        }
        break;
      default:
        break;
    }
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
                  <button onClick={() => this.decrease('width')}>-</button>
                  <input
                    name="width"
                    type="number"
                    value={this.state.width}
                    onChange={this.handleChange}
                    min={Settings.MINIMUM_WIDTH}
                  />
                  <button onClick={() => this.increase('width')}>+</button>
                </div>
                <div class="number-input">
                  <button onClick={() => this.decrease('height')}>-</button>
                  <input
                    name="height"
                    type="number"
                    value={this.state.height}
                    onChange={this.handleChange}
                    min={Settings.MINIMUM_HEIGHT}
                  />
                  <button onClick={() => this.increase('height')}>+</button>
                </div>
                <div class="number-input">
                  <button onClick={() => this.decrease('tick')}>-</button>
                  <input
                    name="tick"
                    type="number"
                    value={this.state.tick}
                    onChange={this.handleChange}
                    min="0"
                  />
                  <button onClick={() => this.increase('tick')}>+</button>
                </div>
              </div>
            </div>
            
            <div className="controls">
              <button onClick={() => this.save()}>
                Save
              </button>
              {this.state.msg}
            </div>
          
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;