import {
  DashboardReducer as Reducer,
  INITIAL_STATE as STATE,
  DashboardActions as Actions,
  DashboardSelectors as Selectors,
} from '.'

describe('Dashboard Reducer', () => {
  const user_id = 'test_user_id'

  describe('Actions', () => {
    it('should receive data', () => {
      const data = [{ user_id }, { user_id }]

      const state = Reducer(STATE, Actions.fetchDashboardSuccess(data))
      expect(state.data).toEqual(data)
    })

    it('should reset state', () => {
      const state = Reducer(STATE, Actions.resetDashboard())
      expect(state).toEqual(STATE)
    })
  })

  describe('Selectors', () => {
    let mockState

    beforeEach(() => {
      mockState = {
        dashboard: {
          data: [{ user_id }, { user_id }],
          errors: [],
        },
      }
    })

    describe('getDashboard', () => {
      it('should return data if is setup', () => {
        const data = Selectors.getDashboard(mockState)
        expect(data).toEqual(mockState.dashboard.data)
      })

      it('should return empty array if data is not setup', () => {
        mockState.dashboard.data = []
        const data = Selectors.getDashboard(mockState)
        expect(data).toEqual([])
      })
    })
  })
})
