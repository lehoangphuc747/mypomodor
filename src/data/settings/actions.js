import { localStorageAPI } from '../../storage/localStorage'

export const setWorkDuration = (duration) => ({
  type: 'SET_WORK_DURATION',
  duration,
})

export const startSetWorkDuration = (duration) => {
  return async (dispatch, getState) => {
    dispatch(setWorkDuration(duration))

    const currentSettings = localStorageAPI.getSettings() || {}
    await localStorageAPI.saveSettings({
      ...currentSettings,
      workDuration: duration
    })
  }
}

export const setShortBreakDuration = (duration) => ({
  type: 'SET_SHORT_BREAK_DURATION',
  duration,
})

export const startSetShortBreakDuration = (duration) => {
  return async (dispatch, getState) => {
    dispatch(setShortBreakDuration(duration))

    const currentSettings = localStorageAPI.getSettings() || {}
    await localStorageAPI.saveSettings({
      ...currentSettings,
      shortBreakDuration: duration
    })
  }
}

export const setLongBreakDuration = (duration) => ({
  type: 'SET_LONG_BREAK_DURATION',
  duration,
})

export const startSetLongBreakDuration = (duration) => {
  return async (dispatch, getState) => {
    dispatch(setLongBreakDuration(duration))

    const currentSettings = localStorageAPI.getSettings() || {}
    await localStorageAPI.saveSettings({
      ...currentSettings,
      longBreakDuration: duration
    })
  }
}

export const setRounds = (rounds) => ({
  type: 'SET_ROUNDS',
  rounds,
})

export const startSetRounds = (rounds) => {
  return async (dispatch, getState) => {
    dispatch(setRounds(rounds))

    const currentSettings = localStorageAPI.getSettings() || {}
    await localStorageAPI.saveSettings({
      ...currentSettings,
      rounds
    })
  }
}

export const setShowTimerInTitle = (showTimerInTitle) => ({
  type: 'SET_SHOW_TIMER_IN_TITLE',
  showTimerInTitle,
})

export const startSetShowTimerInTitle = (showTimerInTitle) => {
  return async (dispatch, getState) => {
    dispatch(setShowTimerInTitle(showTimerInTitle))

    const currentSettings = localStorageAPI.getSettings() || {}
    await localStorageAPI.saveSettings({
      ...currentSettings,
      showTimerInTitle
    })
  }
}

export const setShowNotifications = (showNotifications) => ({
  type: 'SET_SHOW_NOTIFICATIONS',
  showNotifications,
})

export const startSetShowNotifications = (showNotifications) => {
  return async (dispatch, getState) => {
    dispatch(setShowNotifications(showNotifications))

    const currentSettings = localStorageAPI.getSettings() || {}
    await localStorageAPI.saveSettings({
      ...currentSettings,
      showNotifications
    })
  }
}

export const setDarkMode = (darkMode) => ({
  type: 'SET_DARK_MODE',
  darkMode,
})

export const startSetDarkMode = (darkMode) => {
  return async (dispatch, getState) => {
    localStorage.setItem('darkMode', +darkMode)
    dispatch(setDarkMode(darkMode))

    const currentSettings = localStorageAPI.getSettings() || {}
    await localStorageAPI.saveSettings({
      ...currentSettings,
      darkMode
    })
  }
}

export const setAutostart = (autostart) => ({
  type: 'SET_AUTOSTART',
  autostart,
})

export const startSetAutostart = (autostart) => {
  return async (dispatch, getState) => {
    dispatch(setAutostart(autostart))

    const currentSettings = localStorageAPI.getSettings() || {}
    await localStorageAPI.saveSettings({
      ...currentSettings,
      autostart
    })
  }
}

export const setFirstDayOfTheWeek = (firstDayOfTheWeek) => ({
  type: 'SET_FIRST_DAY_OF_THE_WEEK',
  firstDayOfTheWeek,
})

export const startSetFirstDayOfTheWeek = (firstDayOfTheWeek) => {
  return async (dispatch, getState) => {
    dispatch(setFirstDayOfTheWeek(firstDayOfTheWeek))

    const currentSettings = localStorageAPI.getSettings() || {}
    await localStorageAPI.saveSettings({
      ...currentSettings,
      firstDayOfTheWeek
    })
  }
}

export const setSettings = (settings) => ({
  type: 'SET_SETTINGS',
  settings,
})

export const startSetSettings = () => {
  return async (dispatch, getState) => {
    try {
      const settings = localStorageAPI.getSettings()
      
      if (settings) {
        dispatch(setSettings(settings))
      } else {
        // Set default settings if none exist
        const defaultSettings = {
          workDuration: 25,
          shortBreakDuration: 5,
          longBreakDuration: 20,
          rounds: 4,
          showTimerInTitle: false,
          showNotifications: true,
          darkMode: false,
          autostart: false,
          firstDayOfTheWeek: 0 // Sunday
        }
        
        dispatch(setSettings(defaultSettings))
        await localStorageAPI.saveSettings(defaultSettings)
      }
    } catch (error) {
      console.error('Error loading settings:', error)
      // Load defaults on error
      const defaultSettings = {
        workDuration: 25,
        shortBreakDuration: 5,
        longBreakDuration: 20,
        rounds: 4,
        showTimerInTitle: false,
        showNotifications: true,
        darkMode: false,
        autostart: false,
        firstDayOfTheWeek: 0
      }
      dispatch(setSettings(defaultSettings))
    }
  }
}
