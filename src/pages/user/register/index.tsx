import { NextPage } from 'next';
import { useRouter } from 'next/router';
import CustomHead from '../../../components/CustomHead';
import NavBar from '../../../components/NavBar'
import FormUser from '../../../components/form/FormUser';
import TitleBar from '../../../components/TitleBar';
import styles from '../../../styles/register.module.css'

const RegisterUserScreen: NextPage = () => {
  const router = useRouter()
  const {id} = router.query


  return (
    <div className={styles.container}>
      <CustomHead title="Register Client" />
      <NavBar />
      <div className={styles.content}>
        <div className={styles.form}>
          <TitleBar title="New Client" />
          <FormUser />
        </div>
      </div>
    </div>
  )
};

export default RegisterUserScreen;
