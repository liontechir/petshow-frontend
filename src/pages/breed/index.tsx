import { useRouter } from 'next/router'
import styles from 'styles/list.module.css'
import CustomHead from 'components/CustomHead'
import Navbar from 'components/NavBar'
import TitleBar from 'components/TitleBar'
import TableBreeds from 'components/table/TableBreed'
import { Breed } from 'interfaces/Breed'
import { useEffect, useState } from 'react'
import BreedService from 'server/services/BreedService'
import { Auth } from 'auth'


const BreedSCreen = (): JSX.Element => {
  const router = useRouter()
  const [breeds, setBreeds] = useState<Breed[]>()

  const loadBreeds = async () => {
    const breeds = await BreedService.getAll()
    setBreeds(breeds)
  }

  useEffect(() => {
    loadBreeds()
  }, [])

  return (
    <div className={styles.container}>
      <CustomHead title="Breed" />
      <Navbar />
      <div className={styles.content}>
        <div className={styles.table}>
          <TitleBar
            title="Breeds"
            buttonName="New Breed"
            action={() => router.push('/breed/register')}
          />
          <div className={styles.tableContent}>
            {breeds && breeds.map((breed, i) => (
              <TableBreeds
                id={breed.id}
                description={breed.description}
                name={breed.name}
                key={i}
                loadBreeds={loadBreeds}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth(BreedSCreen)
