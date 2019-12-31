import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import studentList from './student/list/sagas';
import studentCreate from './student/create/sagas';
import studentUpdate from './student/update/sagas';
import planCreate from './plan/create/sagas';
import planUpdate from './plan/update/sagas';
import registratiomCreate from './registration/create/sagas';
import registrationUpdate from './registration/update/sagas';
import supportCreate from './support/create/sagas';
import supportList from './support/list/sagas';

export default function* rootSaga() {
  return yield all([
    auth,
    user,
    studentCreate,
    studentUpdate,
    studentList,
    planCreate,
    planUpdate,
    registratiomCreate,
    registrationUpdate,
    supportCreate,
    supportList,
  ]);
}
