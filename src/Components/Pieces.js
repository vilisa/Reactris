const piece_O = {
  shapes: [
    [[1,1],
    [1,1]],
  ],
  pos_y: 0,
  pos_x: 4,
  rotation: 0,
  potential_pos_y: 0,
  potential_pos_x: 0,
  potential_rotation: 0
};

const piece_J = {
  shapes: [
    [[0,1,1],
    [0,1,0],
    [0,1,0]],

    [[0,0,0],
    [1,1,1],
    [0,0,1]],

    [[0,1,0],
    [0,1,0],
    [1,1,0]],

    [[1,0,0],
    [1,1,1],
    [0,0,0]]
  ],
  pos_y: 0,
  pos_x: 4,
  rotation: 0,
  potential_pos_y: 0,
  potential_pos_x: 0,
  potential_rotation: 0
};

const piece_L = {
  shapes: [
    [[1,1,0],
    [0,1,0],
    [0,1,0]],

    [[0,0,1],
    [1,1,1],
    [0,0,0]],

    [[0,1,0],
    [0,1,0],
    [0,1,1]],

    [[0,0,0],
    [1,1,1],
    [1,0,0]],
  ],
  pos_y: 0,
  pos_x: 4,
  rotation: 0,
  potential_pos_y: 0,
  potential_pos_x: 0,
  potential_rotation: 0,
};

const piece_T = {
  shapes: [
    [[0,1,0],
    [1,1,1],
    [0,0,0]],

    [[0,1,0],
    [0,1,1],
    [0,1,0]],

    [[0,0,0],
    [1,1,1],
    [0,1,0]],

    [[0,1,0],
    [1,1,0],
    [0,1,0]],
  ],
  pos_y: 0,
  pos_x: 4,
  rotation: 0,
  potential_pos_y: 0,
  potential_pos_x: 0,
  potential_rotation: 0
};

const piece_I = {
  shapes: [
    [[0,0,1,0],
    [0,0,1,0],
    [0,0,1,0],
    [0,0,1,0]],

    [[0,0,0,0],
    [0,0,0,0],
    [1,1,1,1],
    [0,0,0,0]],

    [[0,1,0,0],
    [0,1,0,0],
    [0,1,0,0],
    [0,1,0,0]],

    [[0,0,0,0],
    [1,1,1,1],
    [0,0,0,0],
    [0,0,0,0]],
  ],
  pos_y: 0,
  pos_x: 4,
  rotation: 0,
  potential_pos_y: 0,
  potential_pos_x: 0,
  potential_rotation: 0
};

const piece_Z = {
  shapes: [
    [[0,1,0],
    [0,1,1],
    [0,0,1]],

    [[0,0,0],
    [0,1,1],
    [1,1,0]],

    [[1,0,0],
    [1,1,0],
    [0,1,0]],

    [[0,1,1],
    [1,1,0],
    [0,0,0]]
  ],
  pos_y: 0,
  pos_x: 4,
  rotation: 0,
  potential_pos_y: 0,
  potential_pos_x: 0,
  potential_rotation: 0
};

const piece_S = {
  shapes: [
    [[0,0,1],
    [0,1,1],
    [0,1,0]],

    [[0,0,0],
    [1,1,0],
    [0,1,1]],

    [[0,1,0],
    [1,1,0],
    [1,0,0]],

    [[1,1,0],
    [0,1,1],
    [0,0,0]],
  ],
  pos_y: 0,
  pos_x: 4,
  rotation: 0,
  potential_pos_y: 0,
  potential_pos_x: 0,
  potential_rotation: 0
};

const Pieces = {
  getPiece(type, rotation){
    var piece;

    switch (type) {
      case 'O':
        piece = piece_O;
        break;
      case 'J':
        piece = piece_J;
        break;
      case 'L':
        piece = piece_L;
        break;
      case 'I':
        piece = piece_I;
        break;
      case 'T':
        piece = piece_T;
        break;
      case 'Z':
        piece = piece_Z;
        break;
      case 'S':
        piece = piece_S;
        break;
      default:
        break;
    }
    //Check if can be rotated
    if(piece.shapes.length <= rotation){
      piece.rotation = rotation;
    }
    return piece;
  },

  getPieces(){
    let pieces = [];
    return pieces;
  }
};

export default Pieces;
/*
const piece_O = {
  shapes: [
    [[1,1],
    [1,1]],
  ],
  pos_y: 0,
  pos_x: 4,
  rotation: 0,
  potential_pos_y: 0,
  potential_pos_x: 0,
  potential_rotation: 0
};

const piece_J = {
  shapes: [
    [[0,1,1],
    [0,1,0],
    [0,1,0]],

    [[0,0,0],
    [1,1,1],
    [0,0,1]],

    [[0,1,0],
    [0,1,0],
    [1,1,0]],

    [[1,0,0],
    [1,1,1],
    [0,0,0]]
  ],
  pos_y: 0,
  pos_x: 4,
  rotation: 0,
  potential_pos_y: 0,
  potential_pos_x: 0,
  potential_rotation: 0
};

const piece_L = {
  shapes: [
    [[1,1,0],
    [0,1,0],
    [0,1,0]],

    [[0,0,1],
    [1,1,1],
    [0,0,0]],

    [[0,1,0],
    [0,1,0],
    [0,1,1]],

    [[0,0,0],
    [1,1,1],
    [1,0,0]],
  ],
  pos_y: 0,
  pos_x: 4,
  rotation: 0,
  potential_pos_y: 0,
  potential_pos_x: 0,
  potential_rotation: 0,
};

const piece_T = {
  shapes: [
    [[0,1,0],
    [1,1,1],
    [0,0,0]],

    [[0,1,0],
    [0,1,1],
    [0,1,0]],

    [[0,0,0],
    [1,1,1],
    [0,1,0]],

    [[0,1,0],
    [1,1,0],
    [0,1,0]],
  ],
  pos_y: 0,
  pos_x: 4,
  rotation: 0,
  potential_pos_y: 0,
  potential_pos_x: 0,
  potential_rotation: 0
};

const piece_I = {
  shapes: [
    [[0,0,1,0],
    [0,0,1,0],
    [0,0,1,0],
    [0,0,1,0]],

    [[0,0,0,0],
    [0,0,0,0],
    [1,1,1,1],
    [0,0,0,0]],

    [[0,1,0,0],
    [0,1,0,0],
    [0,1,0,0],
    [0,1,0,0]],

    [[0,0,0,0],
    [1,1,1,1],
    [0,0,0,0],
    [0,0,0,0]],
  ],
  pos_y: 0,
  pos_x: 4,
  rotation: 0,
  potential_pos_y: 0,
  potential_pos_x: 0,
  potential_rotation: 0
};

const piece_Z = {
  shapes: [
    [[0,1,0],
    [0,1,1],
    [0,0,1]],

    [[0,0,0],
    [0,1,1],
    [1,1,0]],

    [[1,0,0],
    [1,1,0],
    [0,1,0]],

    [[0,1,1],
    [1,1,0],
    [0,0,0]]
  ],
  pos_y: 0,
  pos_x: 4,
  rotation: 0,
  potential_pos_y: 0,
  potential_pos_x: 0,
  potential_rotation: 0
};

const piece_S = {
  shapes: [
    [[0,0,1],
    [0,1,1],
    [0,1,0]],

    [[0,0,0],
    [1,1,0],
    [0,1,1]],

    [[0,1,0],
    [1,1,0],
    [1,0,0]],

    [[1,1,0],
    [0,1,1],
    [0,0,0]],
  ],
  pos_y: 0,
  pos_x: 4,
  rotation: 0,
  potential_pos_y: 0,
  potential_pos_x: 0,
  potential_rotation: 0
};

const Pieces = {
  getPiece(type, rotation){
    var piece;

    switch (type) {
      case 'O':
        piece = piece_O;
        break;
      case 'J':
        piece = piece_J;
        break;
      case 'L':
        piece = piece_L;
        break;
      case 'I':
        piece = piece_I;
        break;
      case 'T':
        piece = piece_T;
        break;
      case 'Z':
        piece = piece_Z;
        break;
      case 'S':
        piece = piece_S;
        break;
      default:
        break;
    }
    //Check if can be rotated
    if(piece.shapes.length <= rotation){
      piece.rotation = rotation;
    }
    return piece;
  },

  getPieces(){
    let pieces = [];
    return pieces;
  }
};

export default Pieces;
*/