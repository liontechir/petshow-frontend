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
import { useState } from 'react'
import AuthService from '../backend/services/auth'
import CustomHead from '../components/CustomHead'
import styles from '../styles/index.module.css'

const Index: NextPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()

  const lockButton = (
    <Button
      icon={showPassword ? 'unlock' : 'lock'}
      intent={Intent.WARNING}
      onClick={() => setShowPassword(!showPassword)}
      minimal
    />
  )

  const handleLogin = async () => {
    console.log(email, password);
    const response = await AuthService.execute(email, password).then((res) => res)
    console.log(response)
    // if(result) {
    //   router.push('/user')
    // }
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
          <Button rightIcon="log-in" onClick={handleLogin}>
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