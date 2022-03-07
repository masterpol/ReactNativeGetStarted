import { all, takeLatest } from 'redux-saga/effects'
import API_CLIENT from '_services/apiClient'
import { DashboardTypes, DashboardSagas } from './dashboard'
import { getSagasBinds } from '_utils/sagas'

const dashboardBinds = {
  data: [
    {
      type: DashboardTypes.FETCH_DASHBOARD,
      action: takeLatest,
    },
  ],
  sagas: DashboardSagas,
}

const api = API_CLIENT()

export default function* root() {
  yield all([
    // dashboard binds
    ...getSagasBinds(dashboardBinds, api),
  ])
}
