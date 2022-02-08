import { NextPage } from 'next'
import styles from '../../styles/list.module.css'
import CustomHead from '../../components/CustomHead'
import Navbar from '../../components/NavBar'
import TitleBar from '../../components/TitleBar'
import TableBreeds from '../../components/table/TableBreed'
import { Breed } from '../../interfaces/Breed'
import { useRouter } from 'next/router'

const breed: Breed = {
  name: 'Doberman',
  description: 'Raça Canina',
}

const BreedSCreen: NextPage = () => {
  const router = useRouter()

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
            <TableBreeds name={breed.name} description={breed.description} />
            <TableBreeds name={breed.name} description={breed.description} />
            <TableBreeds name={breed.name} description={breed.description} />
            <TableBreeds name={breed.name} description={breed.description} />
            <TableBreeds name={breed.name} description={breed.description} />
            <TableBreeds name={breed.name} description={breed.description} />
            <TableBreeds name={breed.name} description={breed.description} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreedSCreen
