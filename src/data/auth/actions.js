export const setUserInfo = (userInfo) => ({
  type: 'SET_USER_INFO',
  userInfo,
})

// Simplified auth actions for local-only mode
export const signInLocally = () => {
  return async (dispatch) => {
    const userInfo = {
      uid: 'local-user',
      name: 'Local User',
      creationTime: new Date().toISOString(),
      isLocal: true
    }
    
    dispatch(setUserInfo(userInfo))
    return userInfo
  }
}

export const signOut = () => {
  return async (dispatch) => {
    dispatch(setUserInfo(null))
    // Optionally clear localStorage data
    // localStorageAPI.clearAllData()
  }
}
