import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { ADD_SYMPTOMS_REQUEST, UPDATE_SYMPTOMS_REQUEST } from "../actions";
import {
  addSymptomsSuccess,
  addSymptomsFailure,
  updateSymptomsFailure,
  updateSymptomsSuccess,
} from "./actions";
import { addSymptomsService, updateSymptomsService } from "./services";

function* addSymptomsSaga({ payload }) {
  const { code, name, description, callBack } = payload;
  try {
    const response = yield call(addSymptomsService, code, name, description);

    if (callBack) {
      callBack(response);
    }
    yield put(addSymptomsSuccess(response));
  } catch (error) {
    if (callBack) {
      callBack(error);
    }
    yield put(addSymptomsFailure(error));
  }
}

export function* watchAddSymptomsSaga() {
  yield takeEvery(ADD_SYMPTOMS_REQUEST, addSymptomsSaga);
}

function* updateSymptomsSaga({ payload }) {
  const { id, code, name, description, callBack } = payload;
  try {
    const response = yield call(
      updateSymptomsService,
      id,
      code,
      name,
      description
    );

    if (callBack) {
      callBack(response);
    }
    yield put(updateSymptomsSuccess(response));
  } catch (error) {
    if (callBack) {
      callBack(error);
    }
    yield put(updateSymptomsFailure(error));
  }
}

export function* watchUpdateSymptomsSaga() {
  yield takeEvery(UPDATE_SYMPTOMS_REQUEST, updateSymptomsSaga);
}

export default function* rootSaga() {
  yield all([fork(watchAddSymptomsSaga)]);
  yield all([fork(watchUpdateSymptomsSaga)]);
}
