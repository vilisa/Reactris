import Pieces from "./Pieces.js";
import Settings from '../Settings/Settings.js';

class Piece {
  constructor(stringShape, rotation) {
    this._shape = Pieces.getShape(stringShape, rotation);
    this._shapes = Pieces.getRotations(stringShape);
    this._rotation = rotation;
    this._pos_y = 0;
    this._pos_x = Math.round((Settings.GAME_WIDTH / 2 - 1) - this.getOffset()); //center piece

    this._potential_shape = this._shape;
    this._potential_rotation = this._rotation;
    this._potential_pos_y = this._pos_y;
    this._potential_pos_x = this._pos_x;
  }
  
  get shape(){
    return this._shape;
  }
  get shapes(){
    return this._shapes;
  }
  get rotation(){
    return this._rotation;
  }
  get pos_y(){
    return this._pos_y;
  }
  get pos_x(){
    return this._pos_x;
  }

  get potential_shape(){
    return this._potential_shape;
  }
  get potential_rotation(){
    return this._potential_rotation;
  }
  get potential_pos_y(){
    return this._potential_pos_y;
  }
  get potential_pos_x(){
    return this._potential_pos_x;
  }
  

  //Example: shape = shapes[1];
  set shape(shape){
    this._shape = shape;
  }
  set shapes(shapes){
    this._shapes = shapes;
  }
  set rotation(r){
    this._rotation = r;
  }
  set pos_y(y){
    this._pos_y = y;
  }
  set pos_x(x){
    this._pos_x = x;
  }

  set potential_shape(shape){
    this._potential_shape = shape;
  }
  set potential_rotation(r){
    this._potential_rotation = r;
  }
  set potential_pos_y(y){
    this._potential_pos_y = y;
  }
  set potential_pos_x(x){
    this._potential_pos_x = x;
  }

  getOffset(){
    let offset = 1000;
    let rowOffset = 0;
    for (let row = 0; row < this.shape.length; row++) {
      rowOffset = 0;
      for (let col = 0; col < this.shape[row].length; col++) {
        if (this.shape[row][col] !== 0) break;
        rowOffset++;
      }
      if(rowOffset < offset) offset = rowOffset;
    }
    return offset;
  }

}

export default Piece;