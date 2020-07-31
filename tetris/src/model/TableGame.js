
export default class TableGame {
    constructor(line, column) {
        this.line = line;
        this.column = column;
        this.matrix = [];

        for (let i = 0; i < line; i++) {
            this.matrix.push([])
            for (let j = 0; j < column; j++) {
                this.matrix[i].push(0)
            }
        }
        // this.matrix[1][1] = 1
        // this.matrix[1][7] = 1
        // this.matrix[4][5] = 1
        // this.matrix[5][5] = 1
        // this.matrix[6][5] = 1
    }

    setCurrentPiece(piece) {
        this.piece = piece;
        this.positionsLinePieceInTable = 5;
        this.positionsColumnPieceInTable = 0;

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.piece.matrix[i][j]) {
                    this.matrix[this.positionsLinePieceInTable + i][this.positionsColumnPieceInTable + j] = this.piece.matrix[i][j];
                }
            }
        }
    }
}