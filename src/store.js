import { configureStore } from '@reduxjs/toolkit'
import { reducer as authReducer } from './data/auth/reducer'
import { reducer as settingsReducer } from './data/settings/reducer'
import { reducer as labelsReducer } from './data/labels/reducer'
import { reducer as sessionsReducer } from './data/sessions/reducer'
import { reducer as progressReducer } from './data/progress/reducer'
import { reducer as timerReducer } from './scenes/Timer/data/timer/reducer'

export default () => {
  const store = configureStore({
    reducer: {
      auth: authReducer,
      settings: settingsReducer,
      labels: labelsReducer,
      timer: timerReducer,
      sessions: sessionsReducer,
      progress: progressReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST'],
        },
      }),
    devTools: process.env.NODE_ENV !== 'production',
  })
  return store
}
