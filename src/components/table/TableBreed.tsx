import { Button } from '@blueprintjs/core'
import Link from 'next/link'
import { Breed } from '../../interfaces/Breed'
import styles from '../../styles/components/Table.module.css'

export interface CardPetProps extends Breed {}

const TableBreeds = ({ name, description }: CardPetProps) => {
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
        <Link href="#">
          <a>
            <Button minimal icon="edit" intent="primary" />
          </a>
        </Link>
        <Button minimal icon="delete" intent="danger" />
      </div>
    </div>
  )
}

export default TableBreeds
