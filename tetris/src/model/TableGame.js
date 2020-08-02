

export default class TableGame {
    
    constructor(line, column) {
        this.line = line;
        this.column = column;
        this.matrix = [];
        this.positionsLinePieceInTable = 0;
        this.positionsColumnPieceInTable = 0;

        for (let i = 0; i < line; i++) {
            this.matrix.push([])
            for (let j = 0; j < column; j++) {
                this.matrix[i].push(0)
            }
        }
    }

    setCurrentPiece(piece) {
        this.piece = piece;
        this.positionsLinePieceInTable = 0;
        this.positionsColumnPieceInTable = 3;
        this.showPiece();
    }

    movePiece(diffLine, diffColumn) {
       this.deletePiece();
       this.positionsLinePieceInTable += diffLine;
       this.positionsColumnPieceInTable += diffColumn
       this.showPiece();

    }

    deletePiece() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.piece.matrix[i][j]) {
                    this.matrix[this.positionsLinePieceInTable + i][this.positionsColumnPieceInTable + j] = 0;
                    
                }
            }
        }
    }
    rotateMatrix() {
        this.deletePiece();
        this.piece.rotateMatrix();
        this.showPiece();
    }

    showPiece() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.piece.matrix[i][j]) {
                    this.matrix[this.positionsLinePieceInTable + i][this.positionsColumnPieceInTable + j] = this.piece.matrix[i][j];
                }
            }
        }
    }
}