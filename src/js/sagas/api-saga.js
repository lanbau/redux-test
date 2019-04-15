// REDUX SAGA IS GOOD FOR API CALLS
// https://www.youtube.com/watch?v=o3A9EvMspig

import { takeEvery, call, put } from "redux-saga/effects";

// Watcher will pass every action DATA_REQUESTED to worker function
export default function* watcherSaga() {
  yield takeEvery("DATA_REQUESTED", workerSaga);
}

// Worker

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: "DATA_LOADED", payload });
    
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}
function getData() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response =>
      response.json()
    );
}
