const O = [
  [[1,1],
   [1,1]],
];

const J = [
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
];

const L = [
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
];

const T = [
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
];

const I = [
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
];

const Z = [
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
];

const S = [
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
];

const Pieces2 = {
  getPiece(type, rotation){
    console.log('getPiece(' + type + ',' + rotation + ')');
    var shapes;
    var piece;

    switch (type) {
      case 'O':
       shapes = O;
        break;
      case 'J':
        shapes = J;
        break;
      case 'L':
        shapes = L;
        break;
      case 'I':
        shapes = I;
        break;
      case 'T':
        shapes = T;
        break;
      case 'Z':
        shapes = Z;
        break;
      case 'S':
       shapes = S;
        break;
      default:
        break;
    }

    //Check if can be rotated
    if(shapes.length >= rotation){
      piece = shapes[rotation];
    } else {
      piece = shapes[0];
    }
    return piece;
  },

  getPieces(){
    let pieces = [];
    return pieces;
  }
};

export default Pieces2;