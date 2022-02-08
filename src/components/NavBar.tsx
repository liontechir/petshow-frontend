import {
  Alignment,
  Button,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/components/Navbar.module.css'
import dog from '../../public/dogIcon2.png'

const NabBar: NextPage = () => {
  const dogIcon = (
    <Image
      src={dog}
      alt="dogIcon"
      width={32}
      height={32}
    />
  )

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
    </Navbar>
  )
}

export default NabBar
