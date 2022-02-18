import { useState } from 'react'
import { useRouter } from 'next/router'
import { Alert, Button } from '@blueprintjs/core'
import { Pet } from 'interfaces/Pet'
import styles from 'styles/components/Table.module.css'
import { AppToaster } from 'components/Toaster'
import PetService from 'server/services/PetService'

export interface CardPetProps extends Pet {
  loadPets: () => void
}

const TablePets = ({
  id,
  name,
  breed,
  genre,
  description,
  user,
  loadPets,
}: CardPetProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  const userId = user?.id
  const userName = user?.name
  const breedId = breed?.id
  const breedName = breed?.name

  const actionDelete = async () => {
    setIsLoading(true)
    try {
      if(id) {
        await PetService._delete(id)
        AppToaster!.show({
          message: 'Delete Pet with success!',
          intent: 'success',
        })
        loadPets()
      }
    } catch (error) {
      AppToaster!.show({
        message: 'Some error happened!',
        intent: 'danger',
      })
      console.log(error)
    } finally {
      setIsOpen(false)
      setIsLoading(false)
    }      
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles.item}>
            <h3>Name: </h3>
            <p>{name}</p>
          </div>
          <div className={styles.item}>
            <h3>Breed: </h3>
            <p>{breed?.name}</p>
          </div>
          <div className={styles.item}>
            <h3>Gender: </h3>
            <p>{genre}</p>
          </div>
          <div className={styles.item}>
            <h3>Owner: </h3>
            <p>{user?.name}</p>
          </div>
        </div>
        <div className={styles.item}>
          <h3>Description: </h3>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          minimal
          icon="edit"
          intent="primary"
          onClick={() => {
            router.push({
              pathname: '/pet/register',
              query: {
                id,
                name,
                genre,
                description,
                userId,
                userName,
                breedId,
                breedName,
              },
            })
          }}
        />
        <Button
          minimal
          icon="delete"
          intent="danger"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <Alert
        cancelButtonText="Cancel"
        confirmButtonText="Delete Pet"
        icon="trash"
        intent="danger"
        isOpen={isOpen}
        loading={isLoading}
        onCancel={() => setIsOpen(false)}
        onConfirm={() => actionDelete()}
      >
        <p>Delete {name}??</p>
      </Alert>
    </div>
  )
}

export default TablePets
