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
    if (diffLine === 0) {
      return false;
    }
    this.deleteTheLineCompleted(state);
    this.anotherPieceInGame(state);
    return true;
  }

  teleportDown(state) {
    while (!this.movePiece(state, 1, 0));
  }

  anotherPieceInGame(state) {
    state.currentPieceIndex = state.nextPieceIndex;
    state.nextPieceIndex = Math.floor(Math.random() * 7);
    this.setCurrentPiece(state.pieces[state.currentPieceIndex]);
  }

  deleteTheLineCompleted(state) {
    for (var i = this.line - 1; i >= 0; i--) {
      if (this.isLineCompleted(i)) {
        this.lowerTheRows(i);
        this.updateScore(state);
        this.updateLevel(state);
        i += 1;
      }
    }
  }

  isLineCompleted(lineIndex) {
    for (var i = 0; i < this.column; i++) {
      if (this.matrix[lineIndex][i] == 0) {
        return false;
      }
    }
    return true;
  }

  lowerTheRows(i) {
    for (var x = i - 1; x >= 0; x--) {
      for (var y = 0; y < this.column; y++) {
        this.matrix[x + 1][y] = this.matrix[x][y];
      }
    }
  }

  updateScore(state) {
    state.aboutGame.score += 1;
    if (state.aboutGame.hiScore < state.aboutGame.score) {
      state.aboutGame.hiScore = state.aboutGame.score;
    }
  }
  updateLevel(state) {
    var oldLevel = state.aboutGame.level;
    state.aboutGame.level = Math.floor(state.aboutGame.score / 2) + 1;
    if (state.aboutGame.level != oldLevel) {
      clearInterval(state.intervalId);
      state.speed = (80 * state.speed) / 100;
      state.intervalId = setInterval(() => {
        this.movePiece(state, 1, 0);
      }, state.speed);
    }
  }

  isThePieceInTable(x, y) {
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        if (
          (!this.isCoordonateInTable(i + x, j + y) ||
            this.matrix[i + x][j + y]) &&
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

  cleanTheTable(state) {
    for (var i = 0; i < state.numberLineTableGame; i++) {
      for (var j = 0; j < state.numberColumnTableGame; j++) {
        this.matrix[i][j] = 0;
      }
    }
  }
}
