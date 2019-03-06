import Piece from '../Pieces/Piece.js';

const AppActions = {
  
  validateMove(state){
    if(!state.paused && state.piece && this.isSpaceAvailable(state)){
      return true;
    }
    return false;
  },

  isSpaceAvailable(state){
    var piece = state.piece;
    var landed = state.landed;

    //try catch to handle piece going over board
    try {
      for (let row = 0; row < piece.potential_shape.length; row++) {
        for (let col = 0; col < piece.potential_shape[row].length; col++) {
          if (piece.potential_shape[row][col] !== 0) {
            if(landed[row + piece.potential_pos_y][col + piece.potential_pos_x] !== 0){
              //Space not available
              return false;
            }
          }
        }
      }
      return true;
    } catch (error) {
      return false;
    }
  },

  moveDown(state) {
    state.piece.potential_pos_y = state.piece.pos_y + 1;

    if(this.validateMove(state)){
      console.log('Down');
      state.piece.pos_y = state.piece.potential_pos_y;
    } else {
      //cant move down, land the block in place
      this.landPiece(state);
    }
    return state;
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
    piece.potential_rotation = piece.rotation + 1;

    //check if has next shape
    if(piece.potential_rotation < piece.shapes.length){
      piece.potential_shape = piece.shapes[piece.potential_rotation];
    } else {
      piece.potential_rotation = 0;
      piece.potential_shape = piece.shapes[0];
    }
    
    if(this.validateMove(state)){
      piece.shape = piece.potential_shape;
      piece.rotation = piece.potential_rotation;
    } else {
      //reset
      piece.potential_rotation = piece.rotation;
      piece.potential_shape = piece.shape;
    }
    return piece;
  },

  pause(state) {
    state.paused = !state.paused;
    (state.paused ? console.log('Pause') : console.log('Resume') );
    return state.paused;
  },

  clearPiece(state){
    state.piece = null;
    return state.piece; 
  },

  landPiece(state){
    if(!state.piece) return;

    console.log('land piece');
    var piece = state.piece;
    var landed = state.landed;

    //draw piece to landed board
    for (let row = 0; row < piece.shape.length; row++) {
      for (let col = 0; col < piece.shape[row].length; col++) {
        if (piece.shape[row][col] !== 0) {
          landed[row + piece.pos_y][col + piece.pos_x] = piece.shape[row][col];
        }
      }
    }
    state.score = state.score + 10;
    state.piece = this.spawnPiece();
    return state;
  },

  spawnPiece(){
    var list = ['O', 'J', 'L', 'I', 'T', 'Z', 'S'];
    var randShape = list[Math.floor(Math.random() * 7)];
    return new Piece(randShape, 0);
  }
};

export default AppActions;


  /*
  rotation pushing 
    var pw = piece.shapes[piece.potential_rotation][0].length;
    var ph = piece.shapes[piece.potential_rotation].length;

    var width = state.board[0].length;
    var height = state.board.length;
    var npw = piece.shapes[piece.potential_rotation][0].length;
    var nph = piece.shapes[piece.potential_rotation].length;
    var py = piece.potential_pos_y;
    var px = piece.potential_pos_x;

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