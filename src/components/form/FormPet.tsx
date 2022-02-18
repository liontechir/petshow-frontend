import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
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
import { AppToaster } from 'components/Toaster'
import { Breed } from 'interfaces/Breed'
import PetService from 'server/services/PetService'
import styles from 'styles/components/Form.module.css'
import dog from '../../../public/dogIcon2.png'
import BreedService from 'server/services/BreedService'

interface FormPetProps {
  id?: number
  name?: string
  genre?: string
  description?: string
  userId?: number
  userName?: string
  breedId?: number
  breedName?: string
}

const FormPet = ({
  id,
  name,
  genre,
  description,
  userId,
  userName,
  breedId,
  breedName,
}: FormPetProps): JSX.Element => {
  const [loading, setLoading] = useState(false)
  const [newName, setNewName] = useState<string>(`${name ? name : ''}`)
  const [newGenre, setNewGenre] = useState<string>(`${genre ? genre : ''}`)
  const [owner, setOwner] = useState<string>(`${userName ? userName : ''}`)
  const [breed, setBreed] = useState<{ id?: number; name?: string }>({
    id: breedId,
    name: breedName,
  })
  const [breeds, setBreeds] = useState<Breed[]>()
  const [newDescription, setNewDescription] = useState<string>(
    `${description ? description : ''}`
  )
  const router = useRouter()
  console.log(id)
  console.log(breed)

  const dogIcon = <Image src={dog} alt="dogIcon" width={32} height={32} />

  const loadBreeds = async () => {
    const breeds = await BreedService.getAll()
    setBreeds(breeds)
  }

  useEffect(() => {
    loadBreeds()
  },[])


  const genders = ['','Mal', 'Fem']

  const savePet = async () => {
    setLoading(true)
    const pet = {
      name: newName,
      genre: newGenre,
      description: newDescription,
      breed_id: breed.id,
      user_id: userId,
    }
    try {
      if (id) {
        await PetService.put(pet, id)
        AppToaster!.show({
          message: 'Pet edited with success!',
          intent: 'success',
        })
        setTimeout(() => router.back(), 2000)
      } else {
        await PetService.post(pet)
        AppToaster!.show({
          message: 'Pet created with success!',
          intent: 'success',
        })
        setTimeout(() => router.back(), 2000)
      }
    } catch (error: any) {
      AppToaster!.show({
        message: 'Some error happened',
        intent: 'danger',
      })
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

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
          <InputGroup id="owner" type="text" large disabled value={owner} />
        </FormGroup>
        <InputGroup
          className={styles.item}
          placeholder="Enter pet's name"
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          leftElement={dogIcon}
          large
        />
        <InputGroup
          className={styles.item}
          placeholder="Enter with short description of pet"
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          leftElement={<Icon icon="comment" />}
          large
        />
        <div className={styles.row}>
          <FormGroup label="Choose a gender:" labelFor="gender">
            <HTMLSelect
              id="gender"
              options={genders}
              value={newGenre}
              onChange={(e) => setNewGenre(e.target.value)}
              large
            />
          </FormGroup>
          <FormGroup label="Choose a breed:" labelFor="breed">
            <HTMLSelect
              large
              value={breed.name}
              onChange={(e) =>{
                setBreed({
                  id: +e.target.options[e.target.selectedIndex].id,
                  name: e.target.value,
                })
              }}
            >
              <option></option>
              {breeds && breeds.map((breed, i) => (
                <option
                  value={breed.name}
                  key={breed.id}
                  id={`${breed.id}`}
                >
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
            loading={loading}
            onClick={() => savePet()}
          />
          <Button
            className={styles.button}
            text="Cancel"
            intent={Intent.DANGER}
            large
            onClick={() => router.back()}
          />
        </div>
      </Card>
    </div>
  )
}

export default FormPet
