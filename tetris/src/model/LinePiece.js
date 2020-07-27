import Piece from "./Piece";

export default class LinePiece extends Piece {
    constructor() {
        super([
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ])
    }
}