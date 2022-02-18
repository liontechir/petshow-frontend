import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Alert, Button } from '@blueprintjs/core'
import { Breed } from 'interfaces/Breed'
import styles from 'styles/components/Table.module.css'
import BreedService from 'server/services/BreedService'
import { AppToaster } from 'components/Toaster'

export interface CardPetProps extends Breed {
  loadBreeds: () => void
}

const TableBreeds = ({id, name, description, loadBreeds }: CardPetProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  const actionDelete = async () => {
    setIsLoading(true)
    try {
      if (id) {
        await BreedService._delete(id)
        AppToaster!.show({
          message: 'Delete Breed with success!',
          intent: 'success',
        })
        loadBreeds()
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
            <h3>Description: </h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          minimal
          icon="edit"
          intent="primary"
          onClick={() => {
            router.push({
              pathname: '/breed/register',
              query: { id, name, description },
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
        confirmButtonText="Delete Breed"
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

export default TableBreeds
