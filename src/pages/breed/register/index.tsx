import { NextPage } from 'next'
import { useRouter } from 'next/router'
import CustomHead from '../../../components/CustomHead'
import NavBar from '../../../components/NavBar'
import TitleBar from '../../../components/TitleBar'
import styles from '../../../styles/register.module.css'
import FormBreed from '../../../components/form/FormBreed'

const RegisterBreedScreen:NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className={styles.container}>
      <CustomHead title="Register Breed" />
      <NavBar />
      <div className={styles.content}>
        <div className={styles.form}>
          <TitleBar title="New Breed" />
          <FormBreed />
        </div>
      </div>
    </div>
  )
}

export default RegisterBreedScreen