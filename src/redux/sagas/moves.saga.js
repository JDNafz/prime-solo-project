import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* makeMove(action) {
  const newBoard = action.payload.newBoard;
  const move = action.payload.move;
  // console.log("CURRENT MOVE IN MAKEMOVE: ", payload: move)
try {
  yield put({ type: "SET_BOARD", payload: newBoard});
  yield put({ type: "TURN_STEP"});
  yield axios.UPDATE(`/games/moves/${gameId}`);
  yield put({ type: "ADD_TO_CURRENT_GAME_MOVES", payload: move})
} catch (error) {
  console.log("Error making move", error)
}
}

export default function* movesSagas() {
  yield takeLatest('MAKE_MOVE', makeMove);
}



