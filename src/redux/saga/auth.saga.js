import { call, takeEvery, all, put } from 'redux-saga/effects'
import {
  forgetapi,
  signInapi,
  signingoogleapi,
  signoutapi,
  signUpapi,
} from '../../comman/apis/auth.api'
import { historydata } from '../../History/history'
import { setalertaction } from '../actions/alert.action'
import {
  forgetpasswordaction,
  Logoutedaction,
  signedinaction,
} from '../actions/signup.action'
import * as ActionTypes from '../actiontypes'

function* signUp(action) {
  try {
    const user = yield call(signUpapi, action.payload)
    yield put(setalertaction({ text: user.payload, color: 'success' }))
  } catch (e) {
    yield put(setalertaction({ text: e.payload, color: 'error' }))
  }
}
function* signIn(action) {
  try {
    const user = yield call(signInapi, action.payload)
    yield put(signedinaction())
    yield put(setalertaction({ text: 'Login successfully.', color: 'success' }))
    historydata.push('/H')
  } catch (e) {
    yield put(setalertaction({ text: e.payload, color: 'error' }))
  }
}

function* signout() {
  try {
    const user = yield call(signoutapi)
    yield put(Logoutedaction())
    yield put(setalertaction({ text: user.payload, color: 'success' }))
    historydata.push('/Login')
  } catch (e) {
    yield put(setalertaction({ text: e.payload, color: 'error' }))
  }
}

function* signGoogle() {
  try {
    const user = yield call(signingoogleapi)
    yield put(signedinaction(user.payload))
    historydata.push('/H')
    yield put(setalertaction({ text: 'Login successfully.', color: 'success' }))
  } catch (e) {
    yield put(setalertaction({ text: e.payload, color: 'error' }))
  }
}

function* forgetpasswordsaga(action) {
  try {
    const user = yield call(forgetapi, action.payload)
    historydata.push('/H')
    yield put(setalertaction({ text: user.payload, color: 'success' }))
  } catch (e) {
    yield put(setalertaction({ text: e.payload, color: 'error' }))
  }
}

function* WatchSignUp() {
  yield takeEvery(ActionTypes.SIGN_UP, signUp)
}
function* WatchSignin() {
  yield takeEvery(ActionTypes.SIGN_IN, signIn)
}

function* WatchSignout() {
  yield takeEvery(ActionTypes.LOGOUT, signout)
}
function* WatchSignGoogle() {
  yield takeEvery(ActionTypes.SIGN_INGOOGLE, signGoogle)
}
function* Watchforget() {
  yield takeEvery(ActionTypes.FORGET, forgetpasswordsaga)
}
export default function* authSaga() {
  yield all([
    WatchSignUp(),
    WatchSignin(),
    WatchSignout(),
    WatchSignGoogle(),
    Watchforget(),
  ])
}
