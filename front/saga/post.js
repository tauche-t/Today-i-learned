import axios from "axios";
import { all, fork, takeLatest, put } from 'redux-saga/effects';
import { ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS } from "../reducer/post";

// function logInAPI() {
//   return axios.post('/api/login');
// }

function* addPost(action) {
  try {
    // const result = yield call(logInAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: ADD_POST_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}


export default function* postSaga() {
  yield all([
    fork(watchAddPost),
  ]);
}