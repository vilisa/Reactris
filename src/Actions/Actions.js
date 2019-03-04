import Pieces from '../Components/Pieces.js';

const AppActions = {
  
  validateMove(state){
    if(!state.paused
      && this.isSpaceAvailable(state)
    ){
      return true;
    }
    return false;
  },

  isSpaceAvailable(state){
    var piece = state.piece;
    var landed = state.landed;

    for (let row = 0; row < piece.shapes[piece.potential_rotation].length; row++) {
      for (let col = 0; col < piece.shapes[piece.potential_rotation][row].length; col++) {
        if (piece.shapes[piece.potential_rotation][row][col] !== 0) {
          if(landed[row + piece.potential_pos_y][col + piece.potential_pos_x] !== 0){
            //Space not available
            return false;
          }
        }
      }
    }
    return true;
  },

  /*
  isWithinBoundaries(state){
    var piece = state.piece;
    var height = state.board.length;
    var width = state.board[0].length;
    var pw = piece.shapes[piece.potential_rotation][0].length;
    var ph = piece.shapes[piece.potential_rotation].length;
    var py = piece.potential_pos_y;
    var px = piece.potential_pos_x;

    console.log('h:' + height);
    console.log('width:' + width);
    console.log('pw:' + pw);
    console.log('ph:' + ph);
    console.log('py:' + py);
    console.log('px:' + px);

    console.log('piece width' + Pieces.getPieceWidth(piece));
    console.log('piece height' + Pieces.getPieceHeight(piece));

    //width check
    if(width < (px + pw) || (px < 0)){
      return false;
    }
    //height check
    if(height < (py + ph) || (py < 0)){
      return false
    }
    return true;
  },
  */

  moveDown(state) {
    var piece = state.piece;

    piece.potential_pos_y = state.piece.pos_y + 1;

    if(this.validateMove(state)){
      console.log('Down');
      piece.pos_y = state.piece.potential_pos_y;
    } else {
      //reset
      piece.potential_pos_y = piece.pos_y;
    }
    return piece;
  },

  moveLeft(state) {
    var piece = state.piece;

    piece.potential_pos_x = piece.pos_x - 1;

    if(this.validateMove(state)){
      console.log('Left');
      piece.pos_x = piece.potential_pos_x;
    } else {
      //reset
      piece.potential_pos_x = piece.pos_x;
    }
    return piece;
  },

  moveRight(state) {
    var piece = state.piece;

    piece.potential_pos_x = piece.pos_x  + 1;

    if(this.validateMove(state)){
      console.log('Right');
      piece.pos_x = piece.potential_pos_x;
    } else {
      //reset
      piece.potential_pos_x = piece.pos_x;
    }
    return piece;
  },

  hardDrop(state) {
    if(this.validateMove(state)){
      console.log('Drop');
      //TODO
    }
  },

  rotate(state) {
    var piece = state.piece;
    var pw = piece.shapes[piece.potential_rotation][0].length;
    var ph = piece.shapes[piece.potential_rotation].length;
    piece.potential_rotation = piece.rotation + 1;

    if(piece.potential_rotation >= piece.shapes.length){
      piece.potential_rotation = 0;
    }

    var width = state.board[0].length;
    var height = state.board.length;
    var npw = piece.shapes[piece.potential_rotation][0].length;
    var nph = piece.shapes[piece.potential_rotation].length;
    var py = piece.potential_pos_y;
    var px = piece.potential_pos_x;

    if(this.validateMove(state)){
      console.log('rotate');
      piece.rotation = piece.potential_rotation;
    } 
    /*
    else if(this.isWithinBoundaries(state) === false){
      if(width < (px + pw)){
        console.log('w1');
        piece.pos_x = px - (npw);
      } else if(px < 0){
        console.log('w1');
        piece.pos_x = px + (npw + pw);
      } else if(height < (py + ph)){
        console.log('h1');
        piece.pos_y = py - (nph - ph);
      } else if((py < 0)){
        console.log('h2');
        piece.pos_y = py + (nph + ph);
      }
      piece.rotation = piece.potential_rotation;
    } 
    */
    else {
      //reset
      piece.potential_rotation = piece.rotation;
    }
    return piece;
  },

  pause(state) {
    state.paused = !state.paused;
    (state.paused ? console.log('Pause') : console.log('Resume') );
    return state.paused;
  },

  landPiece(state){
    console.log('land piece');
    var piece = state.piece;
    var landed = state.landed;

    //TODO
    for (let row = 0; row < piece.shapes[piece.rotation].length; row++) {
      for (let col = 0; col < piece.shapes[piece.rotation][row].length; col++) {
        if (piece.shapes[piece.rotation][row][col] !== 0) {
          landed[row + piece.pos_y][col + piece.pos_x] = piece.shapes[piece.rotation][row][col];
        }
      }
    }
    state.score = state.score + 10;
    return state;
  }
};

export default AppActions;