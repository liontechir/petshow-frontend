import { useState } from 'react'
import { Alert, Button, HTMLTable } from '@blueprintjs/core'
import { useRouter } from 'next/router'
import { User } from 'interfaces/User'
import styles from 'styles/components/Table.module.css'
import UserService from 'server/services/UserService'
import { AppToaster } from 'components/Toaster'

export interface CardUserProps extends User {
  loadUsers: () => void
}

const TableUsers = ({ id, name, email, password, pets, loadUsers }: CardUserProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  const actionDelete = async () => {
    setIsLoading(true)
    try {
      if (id) {
        await UserService._delete(id)
        AppToaster!.show({
          message: 'Delete Client with success!',
          intent: 'success'
        })
        loadUsers()
      }
    } catch (error) {
      AppToaster!.show({
        message: 'Some error happened!',
        intent: 'danger'
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
            <h3>Email: </h3>
            <p>{email}</p>
          </div>
        </div>
        <div className={styles.item}>
          <h3>Pets:</h3>
          <HTMLTable condensed striped>
            <thead>
              <tr>
                <th>Name</th>
                <th>Breed</th>
                <th>Gender</th>
              </tr>
            </thead>
            {pets?.map((pet, i) => (
              <tbody key={i}>
                <tr>
                  <td>{pet.name}</td>
                  <td>{pet.breed?.name}</td>
                  <td>{pet.genre}</td>
                </tr>
              </tbody>
            ))}
          </HTMLTable>
          <Button
            small
            icon="add"
            text="Add Pet to Client"
            intent="primary"
            onClick={() => {
              router.push({
                pathname: '/pet/register',
                query: { email },
              })
            }}
          />
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          minimal
          icon="edit"
          intent="primary"
          onClick={() => {
            router.push({
              pathname: '/user/register',
              query: { id, name, email, password },
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
        confirmButtonText="Delete Client"
        icon="trash"
        intent='danger'
        isOpen={isOpen}
        loading={isLoading}
        onCancel={() => setIsOpen(false)}
        onConfirm={() => actionDelete()}
      >
        <p>
          Delete {name}??
        </p>
      </Alert>
    </div>
  )
}

export default TableUsers
