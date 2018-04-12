/*@flow*/
import { all, put, takeLatest } from 'redux-saga/effects';

// import from separate saga
function* setDummy(action) {
  try {
    yield put({ type: 'DUMMY', data: 'Saga da!!!' });
  } catch (e) {
    console.log('Saga error!');
  }
}
function* dummySaga() {
  yield takeLatest('SET_DUMMY', setDummy);
}

export default function* rootSaga(): Iterable<any> {
  yield all([dummySaga()]);
}
