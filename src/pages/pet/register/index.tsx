import { NextPage } from 'next'
import { useRouter } from 'next/router'
import CustomHead from '../../../components/CustomHead'
import FormPet from '../../../components/form/FormPet'
import NavBar from '../../../components/NavBar'
import TitleBar from '../../../components/TitleBar'
import styles from '../../../styles/register.module.css'

const RegisterPetScreen: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className={styles.container}>
      <CustomHead title="Register Pet" />
      <NavBar />
      <div className={styles.content}>
        <div className={styles.form}>
          <TitleBar title="New Pet" />
          <FormPet />
        </div>
      </div>
    </div>
  )
}

export default RegisterPetScreen
