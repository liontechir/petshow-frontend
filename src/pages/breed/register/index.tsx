import { NextPage } from 'next'
import { useRouter } from 'next/router'
import CustomHead from 'components/CustomHead'
import NavBar from 'components/NavBar'
import TitleBar from 'components/TitleBar'
import styles from 'styles/register.module.css'
import FormBreed from 'components/form/FormBreed'

const RegisterBreedScreen: NextPage = () => {
  const router = useRouter()
  const { id, name, description } = router.query

  return (
    <div className={styles.container}>
      <CustomHead title="Register Breed" />
      <NavBar />
      <div className={styles.content}>
        <div className={styles.form}>
          <TitleBar title={id ? 'Edit Breed' : 'New Breed'} />
          <FormBreed
            id={id && !Array.isArray(id) ? +id : undefined}
            name={name && !Array.isArray(name) ? name : undefined}
            description={
              description && !Array.isArray(description)
                ? description
                : undefined
            }
          />
        </div>
      </div>
    </div>
  )
}

export default RegisterBreedScreen
