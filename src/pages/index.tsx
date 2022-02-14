import {
  Button,
  Card,
  Elevation,
  Icon,
  InputGroup,
  Intent,
} from '@blueprintjs/core'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import AuthService from 'server/services/AuthService'
import CustomHead from 'components/CustomHead'
import styles from 'styles/index.module.css'
import { ErrorResponse } from 'interfaces/responses/ErrorResponse'
import { AuthResponse } from 'interfaces/responses/AuthResponse'
import { useGlobalState } from 'context'

const Index: NextPage = () => {
  const { login } = useGlobalState()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<ErrorResponse>()
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  const lockButton = (
    <Button
      icon={showPassword ? 'unlock' : 'lock'}
      intent={Intent.WARNING}
      onClick={() => setShowPassword(!showPassword)}
      minimal
    />
  )

  useEffect(() => {
    if (AuthService.getUserSession()) {
      router.push('/user')
    }
  }, [router])

  const handleLogin = async () => {
    try {
      setLoading(true)
      // login(await AuthService.login(email, password))
      login({
        user: {
          id: 0,
          name: 'John Doe',
          email: 'jon@doe.com',
        },
        token: '123456789',
      })
      router.push('/user')
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  
    // setLoading(true)
    // // Promise
    // return await AuthService.login(email, password)
    //   .then(() => {
    //     setLoading(false)
    //     // const returnUrl = router.query || '/user'
    //     router.push('/user')
    //   })
    //   .catch(error => setError(error))
  }

  return (
    <div className={styles.alingCenter}>
      <CustomHead title="Login" />
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>Petshow</h2>
        </div>
        <Card
          interactive={false}
          elevation={Elevation.THREE}
          className={styles.card}
        >
          <InputGroup
            className={styles.item}
            placeholder="Enter your email..."
            leftElement={<Icon icon="envelope" />}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputGroup
            className={styles.item}
            placeholder="Enter your password..."
            leftElement={lockButton}
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button 
            rightIcon="log-in" 
            onClick={handleLogin}
            loading={loading}
          >
            Login
          </Button>
        </Card>
      </div>
      <p>
        Photo by{' '}
        <a href="https://unsplash.com/@anotherleaf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Chris Arthur-Collins
        </a>{' '}
        on{' '}
        <a href="https://unsplash.com/s/photos/pet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </p>
    </div>
  )
}

export default Index
