export default class Piece {
  constructor(matrix) {
    this.matrix = matrix;
  }
  rotateMatrix() {
    var rotateMatrix = [];
    for (let i = 0; i < 3; i++) {
      rotateMatrix.push([]);
      for (let j = 0; j < 3; j++) {
        rotateMatrix[i][j] = this.matrix[2 - j][i];
      }
    }
    this.matrix = rotateMatrix;
    console.log(this.matrix);

    this.matrix.push([]);
    let i = 3;
    for (let j = 0; j <= 3; j++) {
      this.matrix[i][j] = 0;
      this.matrix[j][i] = 0;
    }

    console.log(this.matrix);
  }
}
