import Settings from '../Settings/Settings';

const { actions } = Settings;

const AppActions = {
  validateMove(state){
    if(!Settings.states.PAUSED){
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
    Settings.states.PAUSED = !Settings.states.PAUSED;
    (Settings.states.PAUSED ? console.log('Pause') : console.log('Resume') );
  },
};

export default AppActions;