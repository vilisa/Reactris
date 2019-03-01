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

      piece: Pieces.getPiece('Z',0)

    }

    this.state.board = BoardController.drawBoard(this.state);
  }

  componentDidMount(){
    this.attachEventListeners();
    //this.spawnPiece();
    //this.startGame();
  }

  drawBoard(){
    console.log('drawboard');
    this.setState({board: BoardController.drawBoard(this.state)});
  }

  setPieceState(state){
    this.setState({piece: state});
    this.drawBoard();
  }

  setStateVariable(value){
    this.setState(value);
  }

  setLanded(state){
    this.setState({landed: state});
  }

  render() {
    return (
      <center>
        <div class="main-container">
            <div class="reactris-container">
              <div class="screen">
                <BoardRenderer state={this.state.board}/>
                <div class="info">
                  <Info state={this.state}/>
                </div>
              </div>

              <div class="controls">
                <Controls state={this.state} movePiece={p=>{this.setPieceState(p)}} setStateVariable={p=>{this.setStateVariable(p)}}/>
              </div>
            </div>
        </div>
      </center>
    )
  }

  attachEventListeners() {
    document.addEventListener('keydown', (event) => {
      if(!this.state.piece) {
        return;
      }
      switch (event.code) {
        case 'ArrowUp':
          this.setPieceState(Actions.rotate(this.state));
          break;
        case 'ArrowDown':
          this.setPieceState(Actions.moveDown(this.state));
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
          this.setLanded(Actions.landPiece(this.state));
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
<table>
          <tbody>
            {this.state.board.map(row => (
              <tr key={row.id}>

                {row.map(col => (
                  this.drawCol(col)
                ))}

              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => this.dropPiece(this.state.piece)}>drop</button>

        <table>
          <tbody>
            {this.state.landed.map(row => (
              <tr key={row.id}>

                {row.map(col => (
                  this.drawCol(col)
                ))}

              </tr>
            ))}
          </tbody>
        </table>
*/