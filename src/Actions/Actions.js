import Constants from '../Constants/Constants';

const { actions } = Constants;

const AppActions = {
  validateMove(state){
    if(!Constants.states.PAUSED){
      return true;
    }
    return false;
  },

  moveDown(state) {
    if(this.validateMove(state)){
      console.log('Down');
      state.piece.pos_y = state.piece.pos_y + 1;
    }
    return state.piece;
  },

  moveLeft(state) {
    if(this.validateMove(state)){
      console.log('Left');
      state.piece.pos_x = state.piece.pos_x - 1;
    }
    return state.piece;
  },

  moveRight(state) {
    if(this.validateMove(state)){
      console.log('Right');
      state.piece.pos_x = state.piece.pos_x + 1;
    }
    return state.piece;
  },

  hardDrop(state) {
    if(this.validateMove(state)){
      console.log('Drop');
      //TODO
    }
  },

  rotate(state) {
    if(this.validateMove(state)){
      console.log('rotate');
      if(state.piece.shapes[state.piece.rotation + 1]){
        state.piece.rotation = state.piece.rotation + 1;
      } else {
        state.piece.rotation = 0;
      }
    }
    return state.piece;
  },

  pause() {
    Constants.states.PAUSED = !Constants.states.PAUSED;
    (Constants.states.PAUSED ? console.log('Pause') : console.log('Resume') );
  },
};

export default AppActions;