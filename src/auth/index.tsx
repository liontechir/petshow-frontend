/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import React, { useEffect } from 'react'
import { useGlobalState } from 'context'
import { useRouter } from 'next/router'
import { User } from 'interfaces/User'

// High Order Component
const AuthComponent = (callback: (user: User) => boolean) => (WrappedComponent: any) => (props: any): JSX.Element => {

    //authentication route
    const { user } = useGlobalState()
    const { push } = useRouter()

    useEffect(() => {
        if (!user) {
            push('/')
        }
    }, [user, push])

    if (!user) {
        return <></>
    } else if (!callback(user)) {
        return (
            <div>Acesso negado</div>
        )
    }

    return (
        <WrappedComponent {...props} />
    )
}

export const Auth = AuthComponent((user: User) => true)
//exemple authorization route
export const OnlyAdminAuth = AuthComponent((user: User) => user.profile === 'admin')
export const OnlyUserAuth = AuthComponent((user: User) => user.profile !== 'customer')
export const OnlyCustomerAuth = AuthComponent((user: User) => user.profile === 'customer')
