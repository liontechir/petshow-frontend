import {
  Button,
  Card,
  Elevation,
  FormGroup,
  HTMLSelect,
  Icon,
  InputGroup,
  Intent,
} from '@blueprintjs/core'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from 'styles/components/Form.module.css'
import dog from '../../../public/dogIcon2.png'

const breeds = [
  { id: 1, name: 'vira-lata' },
  { id: 2, name: 'doberman' },
  { id: 3, name: 'fila' },
]

const genders = ['Male', 'Female']

const FormPet = () => {
  const dogIcon = <Image src={dog} alt="dogIcon" width={32} height={32} />

  const router = useRouter()
  const { id, name } = router.query

  return (
    <div>
      <Card
        className={styles.content}
        interactive={false}
        elevation={Elevation.FOUR}
      >
        <FormGroup
          label="Pet's Owner:"
          labelFor="owner"
          className={styles.item}
        >
          <InputGroup
            id="owner"
            type="text"
            large
            disabled
            value={name?.toString()}
          />
        </FormGroup>
        <InputGroup
          className={styles.item}
          placeholder="Enter pet's name"
          type="text"
          leftElement={dogIcon}
          large
        />
        <InputGroup
          className={styles.item}
          placeholder="Enter with short description of pet"
          type="text"
          leftElement={<Icon icon="comment" />}
          large
        />
        <div className={styles.row}>
          <FormGroup label="Choose a gender:" labelFor="gender">
            <HTMLSelect id="gender" options={genders} defaultValue="" large />
          </FormGroup>
          <FormGroup label="Choose a breed:" labelFor="breed">
            <HTMLSelect id="breed" large>
              {breeds.map((breed) => (
                <option value={breed.name} key={breed.id}>
                  {breed.name}
                </option>
              ))}
            </HTMLSelect>
          </FormGroup>
        </div>
        <div className={styles.buttons}>
          <Button
            className={styles.button}
            text="Save"
            intent={Intent.PRIMARY}
            large
          />
          <Button
            className={styles.button}
            text="Cancel"
            intent={Intent.DANGER}
            large
          />
        </div>
      </Card>
    </div>
  )
}

export default FormPet
