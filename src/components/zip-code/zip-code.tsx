import styles from './zipcode.module.scss'
import cx from 'classnames'
import { ErrorType, Message } from '../../utils/@types'
import { ChangeEvent } from 'react'

interface ZipCodeProps {
  message: Message,
  zipCode: string,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  children?: React.ReactNode
}

const ZipCode = ({ message, zipCode, handleChange }: ZipCodeProps) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerLabel}>
          <p><label htmlFor="zipcode">Zip code</label></p>
          <p className={cx({
            [styles.labelSuccessMsg]: message.type === ErrorType.SUCCESS,
            [styles.labelErrorMsg]: message.type === ErrorType.ERROR,
            [styles.labelWarningMsg]: message.type === ErrorType.WARNING,
            [styles.labelInfoMsg]: message.type === ErrorType.INFO
          })}>{message.message}</p>
        </div>
        <div className={styles.containerInput}>
          <input
            type="text"
            id="zipcode"
            value={zipCode}
            onChange={handleChange}
            placeholder='Enter a zip code'
            className={cx(styles.input, {
              [styles.inputSuccessMsg]: message.type === ErrorType.SUCCESS,
              [styles.inputErrorMsg]: message.type === ErrorType.ERROR,
              [styles.inputWarningMsg]: message.type === ErrorType.WARNING,
              [styles.inputInfoMsg]: message.type === ErrorType.INFO
            })} />
          <div className={cx(styles.messageIcon, {
            [styles.iconSuccess]: message.type === ErrorType.SUCCESS,
            [styles.iconError]: message.type === ErrorType.ERROR,
            [styles.iconWarning]: message.type === ErrorType.WARNING,
            [styles.iconInfo]: message.type === ErrorType.INFO
          })}></div>
        </div>
      </div>
    </>
  )
}

export default ZipCode