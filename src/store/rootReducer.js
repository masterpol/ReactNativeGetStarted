import { combineReducers } from 'redux'
import actionWatchReducer from 'redux-action-watch/lib/reducer'

import { DashboardReducer } from './dashboard'

// const resettable = resettableReducer('RESET')

export default combineReducers({
  dashboard: DashboardReducer,
  // Must be last
  watcher: actionWatchReducer,
})
