import Vue from 'vue'
import Vuex from 'vuex'
import SquarePiece from '../model/SquarePiece'
import LinePiece from '../model/LinePiece'
import SPiece from '../model/SPiece'
import ZPiece from '../model/ZPiece'
import LPiece from '../model/LPiece'
import JPiece from '../model/JPiece'
import TPiece from '../model/TPiece'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
       pieces: [
        new SquarePiece(), 
        new LinePiece(), 
        new SPiece(), 
        new ZPiece(), 
        new LPiece(), 
        new JPiece(), 
        new TPiece()
    ],
       nextPieceIndex: 5
    },
    mutations: {

    },
    getters: {
        nextPiece: (state) => state.pieces[state.nextPieceIndex]
    }
})
