import { localStorageAPI } from '../../storage/localStorage'

export const setSessions = (sessions) => ({
  type: 'SET_SESSIONS',
  sessions,
})

export const startSetSessions = () => {
  return async (dispatch, getState) => {
    try {
      const sessions = localStorageAPI.getSessions()
      dispatch(setSessions(sessions))
      return sessions
    } catch (e) {
      console.error('Error loading sessions:', e)
      dispatch(setSessions([]))
    }
  }
}

export const addSession = (session) => ({
  type: 'ADD_SESSION',
  session,
})

export const startAddSession = (session) => {
  return async (dispatch, getState) => {
    try {
      const { duration, label = null, createdAt } = session
      
      const newSession = await localStorageAPI.saveSession({
        duration,
        label,
        createdAt,
      })

      dispatch(addSession(newSession))
      return newSession
    } catch (error) {
      console.error('Error saving session:', error)
      throw error
    }
  }
}
