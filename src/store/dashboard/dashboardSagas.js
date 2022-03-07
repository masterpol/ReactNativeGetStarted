import { put, call } from 'redux-saga/effects'
import { DashboardActions, DashboardTypes as Types } from './dashboardReducer'

function* fetchDashboard(api, action) {
  const { user_id } = action

  try {
    const data = yield call(api.getDashboard, user_id)

    yield put(DashboardActions.fetchDashboardSuccess(data))
  } catch (e) {
    yield put(DashboardActions.fetchDashboardFails('data unavailable'))
  }
}

export const DashboardSagas = () => ({
  [Types.FETCH_DASHBOARD]: fetchDashboard,
})
