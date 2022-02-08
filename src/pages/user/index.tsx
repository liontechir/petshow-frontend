import { NextPage } from 'next'
import styles from '../../styles/list.module.css'
import CustomHead from '../../components/CustomHead'
import Navbar from '../../components/NavBar'
import TitleBar from '../../components/TitleBar'
import TableUsers from '../../components/table/TableUsers'
import { User } from '../../interfaces/User'
import { useRouter } from 'next/router'

const user: User = {
  name: 'Marlon Henrique',
  email: 'email@email.com',
  pets: [
    {
      name: 'Maya',

      genre: 'Fem',

      breed: {
        name: 'doberman',
        description: 'dog',
      },
      description: 'dog',
    },
    {
      name: 'Maya',

      genre: 'Fem',

      breed: {
        name: 'doberman',
        description: 'dog',
      },
      description: 'dog',
    },
    {
      name: 'Maya',

      genre: 'Fem',

      breed: {
        name: 'doberman',
        description: 'dog',
      },
      description: 'dog',
    },
  ],
}

const UserScreen: NextPage = () => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <CustomHead title="Client" />
      <Navbar />
      <div className={styles.content}>
        <div className={styles.table}>
          <TitleBar
            title="Clients"
            buttonName="New Client"
            action={() => router.push('/user/register')}
          />
          <div className={styles.tableContent}>
            <TableUsers name={user.name} email={user.email} pets={user.pets} />
            <TableUsers name={user.name} email={user.email} pets={user.pets} />
            <TableUsers name={user.name} email={user.email} pets={user.pets} />
            <TableUsers name={user.name} email={user.email} pets={user.pets} />
            <TableUsers name={user.name} email={user.email} pets={user.pets} />
            <TableUsers name={user.name} email={user.email} pets={user.pets} />
            <TableUsers name={user.name} email={user.email} pets={user.pets} />
            <TableUsers name={user.name} email={user.email} pets={user.pets} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserScreen
