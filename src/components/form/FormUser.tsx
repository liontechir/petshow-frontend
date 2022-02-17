import { useState } from 'react'
import { useRouter } from 'next/router'
import {
  Button,
  Card,
  Elevation,
  Icon,
  InputGroup,
  Intent,
} from '@blueprintjs/core'
import styles from 'styles/components/Form.module.css'
import UserService from 'server/services/UserService'
import { AppToaster } from 'components/Toaster'

interface FormUserProps {
  id?: number
  name?: string
  email?: string
  password?: string
}

const FormUser = ({
  id,
  name,
  email,
  password,
}: FormUserProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [newName, setNewName] = useState<string>(`${name ? name : ''}`)
  const [newEmail, setNewEmail] = useState<string>(`${email ? email : ''}`)
  const [newPassword, setNewPassword] = useState<string>(
    `${password ? password : ''}`
  )
  const router = useRouter()

  const lockButton = (
    <Button
      icon={showPassword ? 'unlock' : 'lock'}
      intent={Intent.WARNING}
      onClick={() => setShowPassword(!showPassword)}
      minimal
    />
  )

  const saveUser = async () => {
    setLoading(true)
    const passwordCompare = password == newPassword ? '' : newPassword
    const postUser = { name: newName, email: newEmail, password: newPassword }
    const putUser = { name: newName, email: newEmail, password: passwordCompare }
    try {
      if (id) {
        await UserService.put(putUser, id)
        AppToaster!.show({
          message: 'Client edited with success!',
          intent: 'success',
        })
        setTimeout(() => router.back(), 2000)
      } else {
        await UserService.post(postUser)
        AppToaster!.show({
          message: 'Client created with success!',
          intent: 'success',
        })
        setTimeout(() => router.back(), 2000)
      }
    } catch (error: any) {
      AppToaster!.show({
        message: 'Some error happened',
        intent: 'danger',
      })
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Card
        className={styles.content}
        interactive={false}
        elevation={Elevation.FOUR}
      >
        <InputGroup
          className={styles.item}
          placeholder="Enter with name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          type="text"
          leftElement={<Icon icon="person" />}
          large
        />
        <InputGroup
          className={styles.item}
          placeholder="Enter with email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          disabled={email ? true : false}
          type="text"
          leftElement={<Icon icon="envelope" />}
          large
        />
        <InputGroup
          className={styles.item}
          placeholder="Enter with password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
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
            loading={loading}
            onClick={() => saveUser()}
          />
          <Button
            className={styles.button}
            text="Cancel"
            intent={Intent.DANGER}
            onClick={() => router.back()}
            large
          />
        </div>
      </Card>
    </div>
  )
}

export default FormUser
