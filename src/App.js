import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import { CssBaseline } from '@mui/material'
import { AppBar } from './layout/navigation/AppBar'
import { MainContainer } from './layout/MainContainer'
import { setUserInfo } from './data/auth/actions'
import { startSetSettings } from './data/settings/actions'
import { ThemeConfig } from './ThemeConfig'
import { startSetLabels } from './data/labels/actions'
import { startSetSessions } from './data/sessions/actions'
import { setProgressVisibility } from './data/progress/actions'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // Initialize app with local storage data
    dispatch(setProgressVisibility(true))

    // Create a default local user
    const userInfo = {
      uid: 'local-user',
      name: 'Local User',
      creationTime: new Date().toISOString(),
      isLocal: true
    }

    dispatch(setUserInfo(userInfo))

    // Load data from localStorage
    Promise.all([
      dispatch(startSetSettings()),
      dispatch(startSetLabels()),
      dispatch(startSetSessions()),
    ]).then(() => {
      dispatch(setProgressVisibility(false))
    })
  }, [dispatch])

  return (
    <ThemeConfig>
      <CssBaseline />
      <GlobalStyle />
      <BrowserRouter>
        <AppBar />
        <MainContainer />
      </BrowserRouter>
    </ThemeConfig>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  html {
    overflow: hidden;
  }

  html, body, #root {
    height: 100%;
  }

  .MuiChip-root {
    border-radius: 8px;
    width: 80px;
  }

  .MuiCard-root {
    border-radius: 8px;
  }

  .MuiCardHeader-title {
    font-weight: bold;
  }
`
