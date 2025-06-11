import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'
import { useMediaQuery } from '@mui/material'
import MatToolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import { SignIn } from './SignIn'
import { UserAvatar } from './UserAvatar'
import OfflineIcon from '@mui/icons-material/WifiOff'
import logo from './assets/logo.svg'

export const Toolbar = () => {
  const isUserPerm = useSelector((state) => state.auth.name)
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const mdScreen = +useMediaQuery('(min-width:600px) and (min-height:500px)')

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true)
    }

    const handleOffline = () => {
      setIsOnline(false)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <MatToolbar style={{ paddingTop: 'env(safe-area-inset-top)' }}>
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Logo mdscreen={mdScreen} src={logo} alt="Pomodor logo" />

        {isOnline ? (
          isUserPerm ? (
            <UserAvatar />
          ) : (
            <SignIn />
          )
        ) : (
          <OfflineIcon data-role="offline-icon" />
        )}
      </Box>
    </MatToolbar>
  )
}

export const Logo = styled.img`
  height: 26px;

  ${({ mdscreen }) =>
    mdscreen &&
    css`
      height: 33px;
    `}
`
