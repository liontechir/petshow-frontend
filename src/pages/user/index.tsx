import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from 'styles/list.module.css'
import CustomHead from 'components/CustomHead'
import Navbar from 'components/NavBar'
import TitleBar from 'components/TitleBar'
import TableUsers from 'components/table/TableUsers'
import { User } from 'interfaces/User'
import UserService from 'server/services/UserService'


const UserScreen = (): JSX.Element => {
  const router = useRouter()
  const [users, setUsers] = useState<User[]>()

  const loadUsers = async () => {
    const users =  await UserService.getAll()
    setUsers(users)
  }

  useEffect(() => {
    loadUsers()
  }, [])

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
            {users && users.map((user, i) => (
              <TableUsers
                id={user.id}
                name={user.name}
                email={user.email}
                password={user.password}
                pets={user.pets}
                key={i}
                loadUsers={loadUsers}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserScreen
