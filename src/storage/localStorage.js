// Local Storage utility to replace Firebase
import { v4 as uuidv4 } from 'uuid'

const STORAGE_KEYS = {
  SETTINGS: 'pomodoro_settings',
  LABELS: 'pomodoro_labels', 
  SESSIONS: 'pomodoro_sessions',
  USER: 'pomodoro_user'
}

export const localStorageAPI = {
  // Settings
  getSettings: () => {
    try {
      const settings = localStorage.getItem(STORAGE_KEYS.SETTINGS)
      return settings ? JSON.parse(settings) : null
    } catch (error) {
      console.error('Error getting settings:', error)
      return null
    }
  },

  saveSettings: (settings) => {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings))
      return Promise.resolve(settings)
    } catch (error) {
      console.error('Error saving settings:', error)
      return Promise.reject(error)
    }
  },

  // Labels
  getLabels: () => {
    try {
      const labels = localStorage.getItem(STORAGE_KEYS.LABELS)
      return labels ? JSON.parse(labels) : []
    } catch (error) {
      console.error('Error getting labels:', error)
      return []
    }
  },

  saveLabel: (label) => {
    try {
      const labels = localStorageAPI.getLabels()
      const newLabel = { ...label, id: label.id || uuidv4() }
      const updatedLabels = [...labels, newLabel]
      localStorage.setItem(STORAGE_KEYS.LABELS, JSON.stringify(updatedLabels))
      return Promise.resolve(newLabel)
    } catch (error) {
      console.error('Error saving label:', error)
      return Promise.reject(error)
    }
  },

  updateLabel: (labelId, updates) => {
    try {
      const labels = localStorageAPI.getLabels()
      const updatedLabels = labels.map(label => 
        label.id === labelId ? { ...label, ...updates } : label
      )
      localStorage.setItem(STORAGE_KEYS.LABELS, JSON.stringify(updatedLabels))
      return Promise.resolve(updatedLabels.find(l => l.id === labelId))
    } catch (error) {
      console.error('Error updating label:', error)
      return Promise.reject(error)
    }
  },

  deleteLabel: (labelId) => {
    try {
      const labels = localStorageAPI.getLabels()
      const updatedLabels = labels.filter(label => label.id !== labelId)
      localStorage.setItem(STORAGE_KEYS.LABELS, JSON.stringify(updatedLabels))
      return Promise.resolve()
    } catch (error) {
      console.error('Error deleting label:', error)
      return Promise.reject(error)
    }
  },

  // Sessions
  getSessions: () => {
    try {
      const sessions = localStorage.getItem(STORAGE_KEYS.SESSIONS)
      return sessions ? JSON.parse(sessions) : []
    } catch (error) {
      console.error('Error getting sessions:', error)
      return []
    }
  },

  saveSession: (session) => {
    try {
      const sessions = localStorageAPI.getSessions()
      const newSession = { ...session, id: session.id || uuidv4() }
      const updatedSessions = [...sessions, newSession]
      localStorage.setItem(STORAGE_KEYS.SESSIONS, JSON.stringify(updatedSessions))
      return Promise.resolve(newSession)
    } catch (error) {
      console.error('Error saving session:', error)
      return Promise.reject(error)
    }
  },

  // Clear all data
  clearAllData: () => {
    try {
      Object.values(STORAGE_KEYS).forEach(key => {
        localStorage.removeItem(key)
      })
      return Promise.resolve()
    } catch (error) {
      console.error('Error clearing data:', error)
      return Promise.reject(error)
    }
  }
}

export default localStorageAPI
