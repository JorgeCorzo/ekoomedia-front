import { put, call, takeEvery, delay } from 'redux-saga/effects';

function* fetchUser(action) {
    try {
        const URL = 'https://ekoomedia-back.herokuapp.com/api/students'
        const res = yield fetch(URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(action.payload)
        })
        const data = yield call([res, 'json'])
        if (data.message) {
            yield put({ type: 'FAIL_SET_USER', error: data.message })
            yield delay(5000)
            yield put({ type: 'FINISH_SET_USER', payload: '' })
        } else {
            yield put({ type: 'SUCCESS_SET_USER', payload: data })
            yield delay(5000)
            yield put({ type: 'FINISH_SET_USER', payload: data })
        }
    } catch (error) {
        yield put({ type: 'FAIL_SET_USER', error: error.message })
        yield delay(5000)
        yield put({ type: 'FINISH_SET_USER', payload: '' })
    }
}

function* userSaga() {
    yield takeEvery('START_SET_USER', fetchUser)
}

export default userSaga