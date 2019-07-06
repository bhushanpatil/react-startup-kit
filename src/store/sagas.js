import { put, takeLatest, all } from 'redux-saga/effects'
import { DATA_RECEIVED } from '../constants/action-types'

export function* helloSaga() {
    console.log('Hello Sagas!')
  }

  function* fetchData(){
    console.log("get data triggered")
    
    //ajax call
    const json = yield fetch('./data.json').then(response=> response.json(),);
    yield put({ type: DATA_RECEIVED, payload: json });

  }

  function* actionWatcher(){
    yield takeLatest("GET_DATA",fetchData);
  }

  export default function* rootSaga(){
    yield all([
      actionWatcher(),
    ])
  }