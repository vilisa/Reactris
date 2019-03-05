import Pieces2 from "./Pieces2.js";
import Settings from '../Settings/Settings.js';

class Piece {
  constructor(stringShape, rotation) {
    this._shape = Pieces2.getPiece(stringShape, rotation);
    this._rotation = rotation;
    this._pos_y = 0;
    this._pos_x = 4;
    this._potential_pos_y = 0;
    this._potential_pos_x = Math.round(Settings.GAME_WIDTH / 2 - 1); //center
    this._potential_rotation = 0;
  }
  
  get shape(){
    return this._shape;
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
  get potential_pos_y(){
    return this._potential_pos_y;
  }
  get potential_Pos_x(){
    return this._potential_pos_x;
  }
  get potential_rotation(){
    return this._potential_rotation;
  }

  //Example: setShape(['Z',0]);
  set shape(shape){
    this._shape = Pieces2.getPiece(shape[0], shape[1]);
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
  set potential_pos_y(y){
   this._potential_pos_y = y;
  }
  set potential_Pos_x(x){
   this._potential_pos_x = x;
  }
  set potential_rotation(r){
    this._potential_rotation = r;
  }
  
  Log() {
   console.log(this);
  }
}

export default Piece;