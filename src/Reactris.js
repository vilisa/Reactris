import React, { Component } from 'react';
import './Reactris.css';
import Constants from './Constants/Constants.js';
import Actions from './Actions/Actions.js';
import Board from './Board.js';
import Pieces from './Pieces.js';
import Info from './Info.js';

class Reactris extends Component {
  constructor(props) {
    super(props)

    this.state = {
      score: 0,
      linesCleared: 0,

      board: Board.getNewBoard(),

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

    this.drawBoard();
  }

  componentDidMount(){
    this.attachEventListeners();
    //this.spawnPiece();
    //this.startGame();
  }

  drawBoard(){
    this.setState({board: Board.drawBoard(this.state)});
  }

  setPieceState(state){
    this.setState({piece: state});
  }

  drawCol(value) {
    if (value === 0) {
      return <td class="empty"></td>;
    }
    return <td class="filled"></td>;
  }

  render() {
    return (
      <div class="reactrisContainer">
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
        
        <div class="infoTab">
          <Info/>
        </div>

      </div>
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
        case 'Escape':
          Actions.pause();
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