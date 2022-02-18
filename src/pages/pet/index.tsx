import { NextPage } from 'next'
import styles from 'styles/list.module.css'
import Navbar from 'components/NavBar'
import CustomHead from 'components/CustomHead'
import TitleBar from 'components/TitleBar'
import TablePets from 'components/table/TablePets'
import { Pet } from 'interfaces/Pet'
import { useEffect, useState } from 'react'
import PetService from 'server/services/PetService'


const PetScreen = (): JSX.Element => {
  const [pets, setPets] = useState<Pet[]>()

  const loadPets = async () => {
    const pets = await PetService.getAll()
    setPets(pets)
  }

  useEffect(() => {
    loadPets()
  }, [])

  return (
    <div className={styles.container}>
      <CustomHead title="Pet" />
      <Navbar />
      <div className={styles.content}>
        <div className={styles.table}>
          <TitleBar title="Pets" />
          <div className={styles.tableContent}>
            {pets && pets.map((pet, i) => (
              <TablePets
                id={pet.id}
                name={pet.name}
                breed={pet.breed}
                description={pet.description}
                genre={pet.genre}
                user={pet.user}
                key={i}
                loadPets={loadPets}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetScreen
