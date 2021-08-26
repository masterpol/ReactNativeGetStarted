import { all, takeLatest } from 'redux-saga/effects'
import { DashboardTypes, DashboardSagas } from './dashboard'

const getSagaByType = (type, sagasProvider, ...args) => [
  type,
  sagasProvider()[type],
  ...args,
]

export default function* root() {
  yield all([
    // dashboard binds
    takeLatest(
      ...getSagaByType(DashboardTypes.FETCH_DASHBOARD, DashboardSagas),
    ),
  ])
}
