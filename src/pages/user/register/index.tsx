import { NextPage } from 'next'
import { useRouter } from 'next/router'
import CustomHead from 'components/CustomHead'
import NavBar from 'components/NavBar'
import FormUser from 'components/form/FormUser'
import TitleBar from 'components/TitleBar'
import styles from 'styles/register.module.css'

const RegisterUserScreen: NextPage = () => {
  const router = useRouter()
  const { id, name, email, password } = router.query
  console.log(id, name, email, password)

  return (
    <div className={styles.container}>
      <CustomHead title="Register Client" />
      <NavBar />
      <div className={styles.content}>
        <div className={styles.form}>
          <TitleBar title={id ? 'Edit Client' : 'New Client'} />
          <FormUser
            id={id && !Array.isArray(id) ? +id : undefined}
            name={name && !Array.isArray(name) ? name : undefined}
            email={email && !Array.isArray(email) ? email : undefined}
            password={
              password && !Array.isArray(password) ? password : undefined
            }
          />
        </div>
      </div>
    </div>
  )
}

export default RegisterUserScreen
