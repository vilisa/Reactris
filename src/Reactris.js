import React, { Component } from 'react';
import './Reactris.css';
import Settings from './Settings/Settings.js';
import Actions from './Actions/Actions.js';
import BoardController from './Components/BoardController.js';
import BoardRenderer from './Components/BoardRenderer.js';
import Info from './Components/Info.js';
import Controls from './Components/Controls.js';
import Menu from './Components/Menu.js';

class Reactris extends Component {
  constructor(props) {
    super(props)

    this.state = {
      score: 0,
      linesCleared: 0,
      paused: false,
      gameOver: false,
      intervalID: null,
      board: BoardController.getNewBoard(),
      landed: BoardController.getNewBoard(),
      piece: Actions.spawnPiece()
    }
    
    this.state.board = BoardController.drawBoard(this.state);
  }

  componentDidMount(){
    this.attachEventListeners();
    this.startGame();
  }

  startGame(){
    clearInterval(this.state.intervalID);
    
    //start clock, move piece down with each tick
    var intervalID = setInterval(() => {
      this.setState(Actions.moveDown(this.state));
      this.drawBoard();
    }, Settings.GAME_TICK);
    
    this.setState({intervalID: intervalID});
  }
  
  drawBoard(){
    this.setState({board: BoardController.drawBoard(this.state)});
  }

  setPieceState(state){
    this.setState({piece: state}, function(){
      //callback
      this.drawBoard();
    });
  }

  setWholeState(state){
    this.setState(state, function(){
      //callback
      this.drawBoard();
    });
  }

  pause(){
    let paused = Actions.pause(this.state);
    this.setState({paused: paused});
    if(paused){
      clearInterval(this.state.intervalID);
    } else {
      this.startGame();
    }
  }

  //render helper
  paused(){
    if(this.state.paused){
      return(
        <Menu
        state={this.state}
        pause={()=>{this.pause()}}
        reset={()=>{this.reset()}}
        />
      );
    }
  }

  //render helper
  gameOver(){
    if(this.state.gameOver){
      BoardController.scaleBoard();
      return(
        <div className="gameover">
          <span id="gameover-text">GAME<br/>OVER</span>
        </div>
      );
    }
  }

  reset(){
    this.setState(Actions.reset(), function(){
      //callback
      this.setState({board: BoardController.drawBoard(this.state)});
    });
    BoardController.scaleBoard();
    this.startGame();
  }

  render(){
    return(
      <div className="main-container">
        <div className="gameboy">
          <div className="reactris-container">
            <div className="screen">
              {this.paused()}
              {this.gameOver()}
              <div id="scaler">
                <BoardRenderer state={this.state.board}/>
              </div>
              <Info state={this.state}/>
            </div>
            <div className="controls">
              <Controls state={this.state} 
              movePiece={p=>{this.setPieceState(p)}}
              setState={s=>{this.setWholeState(s)}}
              pause={()=>{this.pause()}}
              reset={()=>{this.reset()}}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  attachEventListeners(){
    //Window Rezise
    window.onload = () => {BoardController.scaleBoard()};
    window.addEventListener("resize", BoardController.scaleBoard.bind(this));

    //Touch start
    window.addEventListener("touchstart", () => {
      //disable context menu, so you can long press the buttons
      document.oncontextmenu = function() {
        return false;
      }
    });

    //Keyboard
    document.addEventListener('keydown', (event) => {
      if(!this.state.piece){
        return;
      }
      switch(event.code){
        case 'ArrowUp':
          this.setPieceState(Actions.rotate(this.state));
          break;
        case 'ArrowDown':
          this.setWholeState(Actions.moveDown(this.state));
          break;
        case 'ArrowLeft':
          this.setPieceState(Actions.moveLeft(this.state));
          break;
        case 'ArrowRight':
          this.setPieceState(Actions.moveRight(this.state));
          break;
        case 'Space':
          this.setWholeState(Actions.hardDrop(this.state));
          break;
        case 'Escape':
          this.pause();
          break;
        default:
          break;
      }
    });
  }
}

export default Reactris;

/*
<div className="debug-container">
  <div className="debug-board">
    Landed Debug
    <BoardRenderer state={this.state.landed}/>
  </div>
  <div className="debug-board">
    Piece Debug
    <BoardRenderer state={this.state.piece.shape}/>
  </div>
</div>
*/