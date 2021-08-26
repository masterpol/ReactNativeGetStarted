import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createActionWatchMiddleware from 'redux-action-watch/lib/middleware'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
const actionWatchMiddleware = createActionWatchMiddleware('watcher')
const middlewares = [actionWatchMiddleware, sagaMiddleware]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  )
  sagaMiddleware.run(rootSaga)
  return { store }
}
