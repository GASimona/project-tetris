import Piece from "./Piece";

export default class IPiece extends Piece {
    constructor() {
        super([
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ])
    }
}