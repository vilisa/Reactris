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

const Pieces = {
  getShape(type, rotation){
    console.log('getShape(' + type + ',' + rotation + ')');
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
    piece = shapes[rotation];
    return piece;
  },

  getRotations(type){
    var shapes;
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
    return shapes;
  }
};

export default Pieces;