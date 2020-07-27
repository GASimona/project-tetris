import Piece from "./Piece";

export default class ZPiece extends Piece {
    constructor() {
        super([
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 1],
            [0, 0, 0, 0],
        ])
    }
}