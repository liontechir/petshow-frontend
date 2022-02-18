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
import styles from '../../styles/components/Form.module.css'
import BreedService from 'server/services/BreedService'
import { AppToaster } from 'components/Toaster'

interface FormBreedProps {
  id?: number
  name?: string
  description?: string
}

const FormBreed = ({ id, name, description }: FormBreedProps): JSX.Element => {
  const [loading, setLoading] = useState(false)
  const [newName, setNewName] = useState<string>(`${name ? name : ''}`)
  const [newDescription, setNewDescription] = useState<string>(`${description ? description : ''}`)
  const router = useRouter()

  const saveBreed = async () => {
    setLoading(true)
    const breed = { name: newName, description: newDescription}
    try {
      if(id) {
        await BreedService.put(breed, id)
        AppToaster!.show({
          message: 'Breed edited with success!',
          intent: 'success',
        })
        setTimeout(() => router.back(), 2000)
      } else {
        await BreedService.post(breed)
        AppToaster!.show({
          message: 'Client created with success!',
          intent: 'success',
        })
        setTimeout(() => router.back(), 2000)
      }
    } catch (error) {
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
          placeholder="🐾 Enter a breed"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          type="text"
          large
        />
        <InputGroup
          className={styles.item}
          placeholder="Enter short description of breed"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          type="text"
          leftElement={<Icon icon="comment" />}
          large
        />
        <div className={styles.buttons}>
          <Button
            className={styles.button}
            text="Save"
            intent={Intent.PRIMARY}
            large
            loading={loading}
            onClick={() => saveBreed()}
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

export default FormBreed
