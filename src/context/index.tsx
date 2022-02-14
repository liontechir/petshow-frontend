import React, { createContext, useState, useContext, useEffect } from 'react'
import { AuthResponse } from 'interfaces/responses/AuthResponse'
import { User } from 'interfaces/User'

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

    const login = (userToken: AuthResponse) => {
        setUserToken(userToken)
        localStorage.setItem('pet_user', JSON.stringify(userToken))
    }

    const logoff = () => {
        setUserToken(undefined)
        localStorage.removeItem('pet_user')
    }

    const { user, token } = userToken ?? {}

    useEffect(() => {
        const userToken = localStorage.getItem('pet_user')
        if (userToken) {
            setUserToken(JSON.parse(userToken))
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
