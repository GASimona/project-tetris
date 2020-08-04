import Piece from "./Piece";

export default class IPiece extends Piece {
  constructor() {
    super([
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
    this.matrix2 = [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ];
  }
  rotateMatrix() {
    var copyMatrix = this.matrix;
    this.matrix = this.matrix2;
    this.matrix2 = copyMatrix;
  }
}
