import Settings from '../Settings/Settings';

const BoardController = {
    getNewBoard(){
        return Array(Settings.GAME_HEIGHT).fill(null).map(_ => Array(Settings.GAME_WIDTH).fill(0));
    },

    drawBoard(state){
        var newBoard = this.getNewBoard();
        var landed = state.landed;
        var piece = state.piece;
    
        //draw landed
        for (let row = 0; row < landed.length; row++) {
          for (let col = 0; col < landed[row].length; col++) {
            if (landed[row][col] !== 0) {
              //draw piece at position corresponding to row and col
              newBoard[row][col] = 1;
            }
          }
        }
    
        //draw current piece
        for (let row = 0; row < piece.shapes[piece.rotation].length; row++) {
          for (let col = 0; col < piece.shapes[piece.rotation][row].length; col++) {
            if (piece.shapes[piece.rotation][row][col] !== 0) {
              //draw piece at position corresponding to 
              //row + piece.pos_y, and col + piece.pos_x
              newBoard[row+piece.pos_y][col+piece.pos_x] = 1;
            }
          }
        }
        return newBoard;
      },

      scaleBoard(){
        let el = document.getElementById('scaler');
        let ratio = Settings.GAME_WIDTH / Settings.GAME_HEIGHT;
        el.style.width = el.offsetHeight * ratio + 'px';
      },
};

export default BoardController;