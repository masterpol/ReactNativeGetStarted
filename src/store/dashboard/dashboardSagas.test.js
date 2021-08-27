import mock from 'react-native-reanimated/mock'
import { expectSaga } from 'redux-saga-test-plan'
import {
  DashboardActions as Actions,
  DashboardSagas,
  DashboardTypes as Types,
} from '.'

describe('Dashboard Sagas', () => {
  const Sagas = DashboardSagas()
  const mockApi = {
    getDashboard: jest.fn(() => [
      { user_id: 'test_user_id' },
      { user_id: 'test_user_id' },
    ]),
  }

  describe('fetchDashboard', () => {
    it('Success request', () => {
      const action = {
        user_id: 'test_user_id',
      }

      return expectSaga(Sagas[Types.FETCH_DASHBOARD], mockApi, action)
        .call(mockApi.getDashboard, action.user_id)
        .put(
          Actions.fetchDashboardSuccess([
            { user_id: action.user_id },
            { user_id: action.user_id },
          ]),
        )
        .run()
    })
  })
})
