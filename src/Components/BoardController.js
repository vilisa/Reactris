import Settings from '../Settings/Settings';

class BoardController {

    /*
    * returns a new empty 10:16 board, can be changed in settings
    */
    static getNewBoard(){
        return Array(Settings.GAME_HEIGHT).fill(null).map(_ => Array(Settings.GAME_WIDTH).fill(0));
    }

    /*
    * returns a new empty row, with current board width
    */
    static getNewRow(){
      return Array(Settings.GAME_WIDTH).fill(0);
    }

    /*
    * helper function to calculate boards current state, with piece position and landed blocks
    */
    static drawBoard(state){
      if(state.piece){
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
        for (let row = 0; row < piece.shape.length; row++) {
          for (let col = 0; col < piece.shape[row].length; col++) {
            if (piece.shape[row][col] !== 0) {
              //draw piece on board
              newBoard[row + piece.pos_y][col + piece.pos_x] = piece.shape[row][col];
            }
          }
        }
        return newBoard;
      }
    }

    static scaleBoard(){
      //scale board
      let s = document.getElementById('scaler');
      if(s){
        let ratio = Settings.GAME_WIDTH / Settings.GAME_HEIGHT;
        s.style.width = s.offsetHeight * ratio + 'px';
      }

      //scale text
      let t = document.getElementById('gameover-text');
      if(t){
        let ratio = 0.25;
        t.style.fontSize = s.offsetWidth * ratio + 'px';
      }
    }
};

export default BoardController;