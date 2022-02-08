import {
  Button,
  Card,
  Elevation,
  Icon,
  InputGroup,
  Intent,
} from '@blueprintjs/core'
import styles from '../../styles/components/Form.module.css'

const FormBreed = () => {

  return (
    <div>
      <Card
        className={styles.content}
        interactive={false}
        elevation={Elevation.FOUR}
      >
        <InputGroup
          className={styles.item}
          placeholder="🐾 Enter a breed"
          type="text"
          large
        />
        <InputGroup
          className={styles.item}
          placeholder="Enter short description of breed"
          type="text"
          leftElement={<Icon icon="comment" />}
          large
        />
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

export default FormBreed
