import Vue from "vue";
import Vuex from "vuex";
import SquarePiece from "../model/SquarePiece";
import IPiece from "../model/IPiece";
import SPiece from "../model/SPiece";
import ZPiece from "../model/ZPiece";
import LPiece from "../model/LPiece";
import JPiece from "../model/JPiece";
import TPiece from "../model/TPiece";
import TableGame from "../model/TableGame";

Vue.use(Vuex);

let numberLine = 20;
let numberColumn = 10;


export default new Vuex.Store({
  state: {
    pieces: [
      new IPiece(),
      new SquarePiece(),
      new SPiece(),
      new ZPiece(),
      new LPiece(),
      new JPiece(),
      new TPiece(),
    ],
    nextPieceIndex: Math.floor(Math.random() * 7),
    currentPieceIndex: 4,
    numberLineTableGame: numberLine,
    numberColumnTableGame: numberColumn,
    tableGame: new TableGame(numberLine, numberColumn)
  },

  mutations: {
    activateNextPiece: (state) => {
        state.tableGame.setCurrentPiece(state.pieces[state.currentPieceIndex])
    },
    movePiece: (state, diff) => {
      state.tableGame.movePiece(state, diff.diffLine, diff.diffColumn);
    },
    teleportDown: (state) => {
      state.tableGame.teleportDown(state);
    },
    rotateMatrix: (state) => {
      state.tableGame.rotateMatrix();
    }
  },
  getters: {
    nextPiece: (state) => state.pieces[state.nextPieceIndex],
    currentPiece: (state) => state.pieces[state.currentPieceIndex],
    numberLineTableGame: (state) => state.numberLineTableGame,
    numberColumnTableGame: (state) => state.numberColumnTableGame,
    tableGame: (state) => state.tableGame
  }
});
