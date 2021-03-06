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
import Sound from "../model/Sound";

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
    aboutGame: {
      hiScore: 2,
      score: 0,
      level: 1,
      cleans: 0,
    },
    isStarted: false,
    speed: 1000,
    intervalId: null,

    nextPieceIndex: Math.floor(Math.random() * 7),
    currentPieceIndex: Math.floor(Math.random() * 7),
    numberLineTableGame: numberLine,
    numberColumnTableGame: numberColumn,
    tableGame: new TableGame(numberLine, numberColumn),
    sound: new Sound(),
  },

  mutations: {
    activateNextPiece: (state) => {
      state.tableGame.setCurrentPiece(state, state.pieces[state.currentPieceIndex]);
    },
    movePiece: (state, diff) => {
      state.tableGame.movePiece(state, diff.diffLine, diff.diffColumn);
    },
    teleportDown: (state) => {
      state.tableGame.teleportDown(state);
    },
    rotateMatrix: (state) => {
      state.tableGame.rotateMatrix();
    },
    toggleStarted: (state) => {
      if (!state.isStarted) {
        state.isStarted = true;
      } else {
        state.isStarted = false;
      }
    },
    setInterval: (state, intervalId) => {
      state.intervalId = intervalId;
    },
    reset: (state) => {
      state.tableGame.cleanTheTable(state);
      if ( state.isStarted ) {
        state.isStarted = false;
        clearInterval(state.intervalId);
        state.intervalId = null;
      }
      state.speed = 1000;
      state.aboutGame.score = 0;
      state.aboutGame.level = 1;
      state.aboutGame.cleans = 0;

      state.nextPieceIndex= Math.floor(Math.random() * 7);
      state.currentPieceIndex= Math.floor(Math.random() * 7);
      state.tableGame.setCurrentPiece(state, state.pieces[state.currentPieceIndex]);

      state.sound.playBackground();
    },
    toggleSound: (state) => {
      state.sound.toggleSound();
    },
    playbutton: (state) => {
      state.sound.playClickButoon();
    }
  },
  getters: {
    nextPiece: (state) => state.pieces[state.nextPieceIndex],
    currentPiece: (state) => state.pieces[state.currentPieceIndex],
    numberLineTableGame: (state) => state.numberLineTableGame,
    numberColumnTableGame: (state) => state.numberColumnTableGame,
    tableGame: (state) => state.tableGame,
    hiScore: (state) => state.aboutGame.hiScore,
    score: (state) => state.aboutGame.score,
    level: (state) => state.aboutGame.level,
    cleans: (state) => state.aboutGame.cleans,
    isStarted: (state) => state.isStarted,
    speed: (state) => state.speed,
    intervalId: (state) => state.intervalId
  },
});
