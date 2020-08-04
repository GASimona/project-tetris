import Piece from "./Piece";

export default class JPiece extends Piece {
    constructor() {
        super([
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
        ]) 
    }
}