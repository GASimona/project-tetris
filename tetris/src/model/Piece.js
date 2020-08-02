export default class Piece {
  constructor(matrix) {
    this.matrix = matrix;
  }
  rotateMatrix() {
    var rotateMatrix = [];
    for (let i = 0; i <= 3; i++) {
      rotateMatrix.push([]);
      for (let j = 0; j <= 3; j++) {
        rotateMatrix[i][j] = this.matrix[3-j][i];
      }
    }
    this.matrix = rotateMatrix;
  }
}
