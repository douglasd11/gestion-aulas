import AuthToken from '@/api/AuthToken'
import { ROUTES } from '@/tools/CONSTANTS'
import { node } from '@/tools/Types'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { API_PROTOTYPES } from '../../api/services'
import { guardarEnLocalStorage } from '../../tools/utils'
import SessionContext from './SessionContext'

function SessionState({ children }) {

  const [session, setSession] = useState()
  const [loading_auth, setLoading] = useState(false)
  const navigate = useNavigate()


  const handleLogin = useCallback(async (data) => {
    try {
      setLoading(true)
      const response = await API_PROTOTYPES.auth.login(data)
      setLoading(false)
      if (response?.token) {
        guardarEnLocalStorage('session', response)
        setSession(response)
        navigate(ROUTES.dashboard.home)
      }


      return response
    } catch (error) {
      setLoading(false)
      return error
    }


  }, [])

  const handleSignUp = useCallback(async (data) => {
    try {
      setLoading(true)
      const response = await API_PROTOTYPES.auth.register(data)
      setLoading(false)
      return response
    } catch (error) {
      setLoading(false)
      return error
    }

  }, [])

  const handleLogOut = useCallback(() => {
    setLoading(true)
    setSession(null)
    API_PROTOTYPES.auth.logout()
      .catch((error) => {
        console.log(error)
      }).finally(() => {
        setLoading(false)
        AuthToken()
          .then(() =>
            navigate(ROUTES.auth.login)
          )
      })
  }, [])

  const handleAuthVerify = useCallback(async () => {
    const session = await AuthToken()
    const isAuthRute=window.location.pathname === ROUTES.auth.login || window.location.pathname === ROUTES.auth.register
  
    if (isAuthRute && session) {
      setSession(session)
      navigate(ROUTES.dashboard.home)
    }else if (!isAuthRute && !session) {
      navigate(ROUTES.auth.login)
    }else{
      setSession(session)
    }
  }, [navigate])


  useEffect(() => {
    setLoading(true)
    handleAuthVerify()
      .finally(() => setLoading(false))
  }, [])

  return (
    <SessionContext.Provider value={{
      session,
      handleAuthVerify,
      handleSignUp,
      handleLogin,
      handleLogOut,
      loading_auth
    }}>
      {children}
    </SessionContext.Provider>
  )
}
SessionState.propTypes = {
  children: node.isRequired
}
export default SessionState