import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions(
  {
    fetchDashboard: ['user_id'],
    fetchDashboardSuccess: ['data'],
    fetchDashboardFails: ['error'],
    resetDashboard: null,
  },
  { prefix: '@Dashboard' },
)

export const DashboardActions = Creators
export const DashboardTypes = Types

/* ------------- Initial state ------------- */
export const INITIAL_STATE = Immutable({
  data: [],
  errors: [],
})

/* ------------- Selectors ------------------- */
export const DashboardSelectors = {
  getDashboard: state => state.dashboard.data,
}

/* ------------- REDUCERS ------------------- */
const fetchDashboardSuccess = (state, { data }) => {
  return state.merge({
    data,
  })
}

const fetchDashboardFails = (state, { error }) => {
  return state.merge({
    data: state.data.concat(error),
  })
}

const resetDashboard = () => INITIAL_STATE

export const DashboardReducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_DASHBOARD_SUCCESS]: fetchDashboardSuccess,
  [Types.FETCH_DASHBOARD_FAILS]: fetchDashboardFails,
  [Types.RESET_DASHBOARD]: resetDashboard,
})
