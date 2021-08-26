import { expectSaga } from 'redux-saga-test-plan'
import {
  DashboardActions as Actions,
  DashboardSagas,
  DashboardTypes as Types,
} from '.'

describe('Dashboard Sagas', () => {
  const Sagas = DashboardSagas()

  describe('fetchDashboard', () => {
    it('Success request', () => {
      const action = {
        user_id: 'test_user_id',
      }

      return expectSaga(Sagas[Types.FETCH_DASHBOARD], {}, action)
        .call(userId => [{ userId }, { userId }], 'test_user_id')
        .put(Actions.fetchDashboardSuccess)
        .run()
    })
  })
})
