export default class TableGame {
  constructor(line, column) {
    this.line = line;
    this.column = column;
    this.matrix = [];
    this.positionsLinePieceInTable = 0;
    this.positionsColumnPieceInTable = 0;

    for (let i = 0; i < line; i++) {
      this.matrix.push([]);
      for (let j = 0; j < column; j++) {
        this.matrix[i].push(0);
      }
    }
  }



  setCurrentPiece(piece) {
    this.piece = piece;
    this.positionsLinePieceInTable = 0;
    this.positionsColumnPieceInTable = 3;
    this.showPiece();
  }

  rotateMatrix() {
    this.deletePiece();
    this.piece.rotateMatrix();

    if (
      !this.isThePieceInTable(
        this.positionsLinePieceInTable,
        this.positionsColumnPieceInTable
      )
    ) {
      this.piece.rotateMatrix();
      this.piece.rotateMatrix();
      this.piece.rotateMatrix();
    }

    this.showPiece();
  }

  movePiece(state, diffLine, diffColumn) {
    this.deletePiece();

    var x = this.positionsLinePieceInTable + diffLine;
    var y = this.positionsColumnPieceInTable + diffColumn;

    if (this.isThePieceInTable(x, y)) {
      this.positionsLinePieceInTable += diffLine;
      this.positionsColumnPieceInTable += diffColumn;
      this.showPiece();
      return false;
    }
    this.showPiece();

    if(diffLine === 0) {
        return false;
    }

    state.currentPieceIndex = state.nextPieceIndex;
    state.nextPieceIndex = Math.floor(Math.random() * 7);
    this.setCurrentPiece(state.pieces[state.currentPieceIndex]);
    return true;
  }

  teleportDown(state) {
     while (!this.movePiece(state, 1, 0));
  }

  isThePieceInTable(x, y) {
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        if (
          (!this.isCoordonateInTable(i + x, j + y) || this.matrix[i + x][j + y] ) &&
          this.piece.matrix[i][j] == 1
        ) {
          return false;
        }
      }
    }
    return true;
  }

  isCoordonateInTable(positionsLinePieceInTable, positionsColumnPieceInTable) {
    if (
      positionsColumnPieceInTable >= 0 &&
      positionsColumnPieceInTable < this.column &&
      positionsLinePieceInTable < this.line
    ) {
      return true;
    } else {
      return false;
    }
  }

  deletePiece() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.piece.matrix[i][j]) {
          this.matrix[this.positionsLinePieceInTable + i][
            this.positionsColumnPieceInTable + j
          ] = 0;
        }
      }
    }
  }

  showPiece() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.piece.matrix[i][j]) {
          this.matrix[this.positionsLinePieceInTable + i][
            this.positionsColumnPieceInTable + j
          ] = this.piece.matrix[i][j];
        }
      }
    }
  }
}
