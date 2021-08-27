import { all, takeLatest } from 'redux-saga/effects'
import API_CLIENT from '_services/apiClient'
import { DashboardTypes, DashboardSagas } from './dashboard'

const getSagaByType = (type, sagasProvider, ...args) => [
  type,
  sagasProvider()[type],
  ...args,
]

const api = API_CLIENT()

export default function* root() {
  yield all([
    // dashboard binds
    takeLatest(
      ...getSagaByType(DashboardTypes.FETCH_DASHBOARD, DashboardSagas, api),
    ),
  ])
}
