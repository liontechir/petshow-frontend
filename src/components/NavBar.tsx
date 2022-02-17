import {
  Alignment,
  Button,
  Icon,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core'
import { useGlobalState } from 'context'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from 'styles/components/Navbar.module.css'
import dog from '../../public/dogIcon2.png'

const NabBar: NextPage = () => {
  const { user, logoff } = useGlobalState()

  const dogIcon = <Image src={dog} alt="dogIcon" width={32} height={32} />

  
  return (
    <Navbar>
      <NavbarGroup align={Alignment.LEFT} className={styles.nav}>
        <NavbarHeading>Petshow</NavbarHeading>
        <NavbarDivider />
        <Link href="/user">
          <a>
            <Button minimal icon="person" text="Client" />
          </a>
        </Link>
        <NavbarDivider />
        <Link href="/pet">
          <a>
            <Button minimal icon={dogIcon} text="Pet" />
          </a>
        </Link>
        <Link href="/breed">
          <a>
            <Button minimal text="Breed" />
          </a>
        </Link>
        <NavbarDivider />
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <NavbarHeading>{user?.name}</NavbarHeading>
        <Button
          icon="log-out"
          minimal
          intent="danger"
          text='Sair'
          onClick={() => logoff()}
        />
      </NavbarGroup>
    </Navbar>
  )
}

export default NabBar
