import { Button, HTMLTable } from '@blueprintjs/core'
import { useRouter } from 'next/router'
import { User } from '../../interfaces/User'
import styles from '../../styles/components/Table.module.css'

export interface CardUserProps extends User {}

const TableUsers = ({ id, name, email, pets }: CardUserProps) => {
  const router = useRouter()

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
                query: { id, name },
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
              query: { email },
            })
          }}
        />
        <Button minimal icon="delete" intent="danger" />
      </div>
    </div>
  )
}

export default TableUsers
