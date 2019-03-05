import React, { Component } from 'react';
import './Reactris.css';
import Settings from './Settings/Settings.js';
import Actions from './Actions/Actions.js';
import BoardController from './Components/BoardController.js';
import BoardRenderer from './Components/BoardRenderer.js';
import Pieces from './Components/Pieces.js';
import Info from './Components/Info.js';
import Controls from './Components/Controls.js';

class Reactris extends Component {
  constructor(props) {
    super(props)

    this.state = {
      score: 0,
      linesCleared: 0,
      paused: false,
      
      board: BoardController.getNewBoard(),

      landed: [[0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,1,0,0],
               [0,0,0,0,0,0,0,1,0,0],
               [0,0,1,0,0,0,0,1,0,0],
               [1,1,1,0,0,0,0,1,0,0]],

      piece: Pieces.getPiece('T',0)

    }

    this.prevState = {};

    this.state.board = BoardController.drawBoard(this.state);
  }

  componentDidMount(){
    this.attachEventListeners();
    //this.spawnPiece();
    //this.startGame();
  }

  componentDidUpdate(){
    if(this.state.board !== this.prevState.board){
      //TODO check rows for clean
    }
  }
  
  drawBoard(){
    console.log('drawboard');
    this.setState({board: BoardController.drawBoard(this.state)});
  }

  setPieceState(state){
    this.prevState = this.state;
    this.setState({piece: state});
    this.drawBoard();
  }

  setStateVariable(value){
    this.prevState = this.state;
    this.setState(value);
  }

  setLanded(state){
    this.prevState = this.state;
    this.setState({landed: state.landed, piece: state.piece,  score: state.score});
  }

  render() {
    return (
      <div className="main-container">
        <div className="gameboy">
          <div className="reactris-container">
              <div className="screen">
                <div id="scaler">
                  <BoardRenderer state={this.state.board}/>
                </div>
                <Info state={this.state}/>
              </div>

            <div className="controls">
              <Controls state={this.state} movePiece={p=>{this.setPieceState(p)}} setStateVariable={p=>{this.setStateVariable(p)}}/>
            </div>
          </div>
        </div>
        <div className="debug-container">
          <div className="debug-board">
            Landed Debug
            <BoardRenderer state={this.state.landed}/>
          </div>
          <div className="debug-board">
            Piece Debug
            <BoardRenderer state={this.state.piece.shapes[this.state.piece.rotation]}/>
          </div>
        </div>
      </div>
    )
  }

  attachEventListeners() {
    //Window Rezise
    window.onload = () => {BoardController.scaleBoard()};
    window.addEventListener("resize", BoardController.scaleBoard.bind(this));

    //Keyboard
    document.addEventListener('keydown', (event) => {
      if(!this.state.piece) {
        return;
      }
      switch (event.code) {
        case 'ArrowUp':
          this.setPieceState(Actions.rotate(this.state));
          break;
        case 'ArrowDown':
          this.setState(Actions.moveDown(this.state));
          break;
        case 'ArrowLeft':
          this.setPieceState(Actions.moveLeft(this.state));
          break;
        case 'ArrowRight':
          this.setPieceState(Actions.moveRight(this.state));
          break;
        case 'Space':
          this.setPieceState(Actions.hardDrop(this.state));
          break;
        //For TESTING
        case 'Enter':
          this.setPieceState(Actions.spawnPiece(this.state));
          break;
        case 'Escape':
          this.setState({paused: Actions.pause(this.state)});
          break;
        default:
          break;
      }
      this.drawBoard();
    });
  }
}

export default Reactris;

/*
<div className="screen">
                <BoardRenderer state={this.state.board}/>
                <Info state={this.state}/>
              </div>
*/