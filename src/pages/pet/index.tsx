import { NextPage } from 'next'
import styles from '../../styles/list.module.css'
import Navbar from '../../components/NavBar'
import CustomHead from '../../components/CustomHead'
import TitleBar from '../../components/TitleBar'
import TablePets from '../../components/table/TablePets'
import { Pet } from '../../interfaces/Pet'

const pet: Pet = {
  name: 'Maya',
  breed: {
    name: 'No breed defined',
    description: 'no breed',
  },
  description: 'dog',
  genre: 'Male',
  breed_id: 1,
  user_id: 1,
  user: {
    name: 'Marlon Henrique',
    password: '123',
    email: 'email@email.com',
  },
}

const PetScreen: NextPage = () => {
  return (
    <div className={styles.container}>
      <CustomHead title="Pet" />
      <Navbar />
      <div className={styles.content}>
        <div className={styles.table}>
          <TitleBar
            title="Pets"
          />
          <div className={styles.tableContent}>
            <TablePets
              name={pet.name}
              breed={pet.breed}
              description={pet.description}
              genre={pet.genre}
              user={pet.user}
            />
            <TablePets
              name={pet.name}
              breed={pet.breed}
              description={pet.description}
              genre={pet.genre}
              user={pet.user}
            />
            <TablePets
              name={pet.name}
              breed={pet.breed}
              description={pet.description}
              genre={pet.genre}
              user={pet.user}
            />
            <TablePets
              name={pet.name}
              breed={pet.breed}
              description={pet.description}
              genre={pet.genre}
              user={pet.user}
            />
            <TablePets
              name={pet.name}
              breed={pet.breed}
              description={pet.description}
              genre={pet.genre}
              user={pet.user}
            />
            <TablePets
              name={pet.name}
              breed={pet.breed}
              description={pet.description}
              genre={pet.genre}
              user={pet.user}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetScreen
