import { NextPage } from 'next'
import { useRouter } from 'next/router'
import CustomHead from 'components/CustomHead'
import FormPet from 'components/form/FormPet'
import NavBar from 'components/NavBar'
import TitleBar from 'components/TitleBar'
import styles from 'styles/register.module.css'

const RegisterPetScreen: NextPage = () => {
  const router = useRouter()
  const { 
    id, 
    name, 
    genre, 
    description, 
    userId, 
    userName, 
    breedId, 
    breedName } = router.query

  return (
    <div className={styles.container}>
      <CustomHead title="Register Pet" />
      <NavBar />
      <div className={styles.content}>
        <div className={styles.form}>
          <TitleBar title={id ? 'Edit Pet' : 'New Pet'} />
          <FormPet
            id={id && !Array.isArray(id) ? +id : undefined}
            name={name && !Array.isArray(name) ? name : undefined}
            genre={genre && !Array.isArray(genre) ? genre : undefined}
            description={description && !Array.isArray(description) ? description : undefined}
            userId={userId && !Array.isArray(userId) ? +userId : undefined}
            userName={userName && !Array.isArray(userName) ? userName : undefined}
            breedId={breedId && !Array.isArray(breedId) ? +breedId : undefined}
            breedName={breedName && !Array.isArray(breedName) ? breedName : undefined}
          />
        </div>
      </div>
    </div>
  )
}

export default RegisterPetScreen
