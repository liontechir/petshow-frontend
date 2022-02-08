import { Button } from '@blueprintjs/core';
import Link from 'next/link';
import { Pet } from '../../interfaces/Pet';
import styles from '../../styles/components/Table.module.css'

export interface CardPetProps extends Pet {
}

const TablePets = ({name, breed, genre, description, user}: CardPetProps) => {
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
        <Link href="#">
          <a>
            <Button minimal icon="edit" intent='primary'/>
          </a>
        </Link>
        <Button minimal icon="delete" intent='danger'/>
      </div>
    </div>
  )
};

export default TablePets;
