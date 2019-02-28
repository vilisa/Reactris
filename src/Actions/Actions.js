import Settings from '../Settings/Settings';

const AppActions = {
  
  validateMove(state){
    if(!Settings.states.PAUSED 
      && this.isSpaceAvailable(state)
      && this.isWithinBoundaries(state)
    ){
      return true;
    }
    return false;
  },

  isSpaceAvailable(state){
    var piece = state.piece;
    var landed = state.landed;

    console.log('r: ' + piece.potential_rotation + 
              '\ny: ' + piece.potential_pos_y + 
              '\nx: ' + piece.potential_pos_x  + 
              '\nshape: ' + piece.shapes[piece.potential_rotation]
    );

    for (var row = 0; row < piece.shapes[piece.potential_rotation].length; row++) {
      for (var col = 0; col < piece.shapes[piece.potential_rotation][row].length; col++) {
        if (piece.shapes[piece.potential_rotation][row][col] !== 0) {
          console.log(piece.shapes[piece.potential_rotation][row][col]);
          if(landed[row + piece.potential_pos_y] !== 0 && landed[col + piece.potential_pos_x] !== 0){
            console.log('Space Taken!');
            console.log('row:' + landed[row + piece.potential_pos_y] + 'col:' + landed[col + piece.potential_pos_x]);
            return true;
          }
        }
      }
    }
    return true;
  },

  isWithinBoundaries(state){
    return true;
  },

  moveDown(state) {
    var piece = state.piece;

    piece.potential_pos_y = state.piece.pos_y + 1;

    if(this.validateMove(state)){
      console.log('Down');
      piece.pos_y = state.piece.potential_pos_y;
    }

    //reset
    piece.potential_pos_y = piece.pos_y;
    return piece;
  },

  moveLeft(state) {
    var piece = state.piece;

    piece.potential_pos_x = piece.pos_x - 1;

    if(this.validateMove(state)){
      console.log('Left');
      piece.pos_x = piece.potential_pos_x;
    }

    //reset
    piece.potential_pos_x = piece.pos_x;
    return piece;
  },

  moveRight(state) {
    var piece = state.piece;

    piece.potential_pos_x = piece.pos_x  + 1;

    if(this.validateMove(state)){
      console.log('Right');
      piece.pos_x = piece.potential_pos_x;
    }

    //reset
    piece.potential_pos_x = piece.pos_x;
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

    if(piece.potential_rotation >= piece.shapes.length){
      piece.potential_rotation = 0;
    }

    if(this.validateMove(state)){
      console.log('rotate');
      piece.rotation = piece.potential_rotation;
    }

    //reset
    piece.potential_rotation = piece.rotation;
    return piece;
  },

  pause() {
    Settings.states.PAUSED = !Settings.states.PAUSED;
    (Settings.states.PAUSED ? console.log('Pause') : console.log('Resume') );
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
    return landed;
  }
};

export default AppActions;