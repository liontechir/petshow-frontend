import React, { createContext, useState, useContext, useEffect } from 'react'
import { AuthResponse } from 'interfaces/responses/AuthResponse'
import { User } from 'interfaces/User'
import AuthService from 'server/services/AuthService'

interface ContextProps {
    user?: User
    token?: string
    login: (userToken: AuthResponse) => void
    logoff: () => void
}

export const AppContext = createContext<ContextProps>({
    login: (userToken: AuthResponse) => {},
    logoff: () => {}
})

interface Props {
    children: React.ReactNode
}

const ContextProvider = ({ children }: Props): JSX.Element => {
    const [userToken, setUserToken] = useState<AuthResponse>()
    const { user, token } = userToken ?? {}

    const login = (userToken: AuthResponse) => {
        setUserToken(userToken)
        AuthService.setUserSession(userToken)
    }

    const logoff = () => {
        setUserToken(undefined)
        AuthService.logout()
    }

    useEffect(() => {
        const user = AuthService.getUserSession()
        if(user){
            setUserToken(user)
        }
    }, [setUserToken])

    return (
        <AppContext.Provider value={{ user, token, login, logoff  }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalState = () => useContext(AppContext)

export default ContextProvider
