import { Button } from '@blueprintjs/core'
import styles from '../styles/components/TitleBar.module.css'

interface TitleBarProps {
  title: string
  buttonName?: string,
  action?: () => void
}

const TitleBar = ({ title, buttonName, action }: TitleBarProps) => {
  return (
    <div className={styles.titleBar}>
      <h2>{title}</h2>
      {buttonName && (
        <Button
          className={styles.button}
          rightIcon="add"
          text={buttonName}
          intent="primary"
          onClick={action}
          small
        />
      )}
    </div>
  )
}

export default TitleBar
