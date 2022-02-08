import { useState } from 'react'
import {
  Button,
  Card,
  Elevation,
  Icon,
  InputGroup,
  Intent,
} from '@blueprintjs/core'
import styles from '../../styles/components/Form.module.css'

const FormUser = () => {
  const [showPassword, setShowPassword] = useState(false)

  const lockButton = (
    <Button
      icon={showPassword ? 'unlock' : 'lock'}
      intent={Intent.WARNING}
      onClick={() => setShowPassword(!showPassword)}
      minimal
    />
  )
  return (
    <div>
      <Card
        className={styles.content}
        interactive={false}
        elevation={Elevation.FOUR}
      >
        <InputGroup
          className={styles.item}
          placeholder="Enter your name"
          type="text"
          leftElement={<Icon icon="person" />}
          large
        />
        <InputGroup
          className={styles.item}
          placeholder="Enter your email"
          type="text"
          leftElement={<Icon icon="envelope" />}
          large
        />
        <InputGroup
          className={styles.item}
          placeholder="Enter a password"
          type={showPassword ? 'text' : 'password'}
          leftElement={lockButton}
          large
        />
        <div className={styles.buttons}>
          <Button
            className={styles.button}
            text="Save"
            intent={Intent.PRIMARY}
            large
          />
          <Button
            className={styles.button}
            text="Cancel"
            intent={Intent.DANGER}
            large
          />
        </div>
      </Card>
    </div>
  )
}

export default FormUser
