/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import ZipCodeService from "services/zipcode";
import { ErrorType, Message, ZipCode as ZipCodeType } from "utils/@types";
import { Constants } from "utils/constants";
import ZipCode from "./zip-code";

interface ZipCodeContainerProps {
  onZipCodeInfo: (zipCode: ZipCodeType | undefined) => void,
  children?: React.ReactNode
}

const ZipCodeContainer = ({ onZipCodeInfo }: ZipCodeContainerProps) => {
  const zipcodeService = new ZipCodeService()
  const [zipCode, setZipCode] = useState('')
  const [message, setMessage] = useState<Message>({
    type: ErrorType.INFO,
    message: ''
  })

  const validate = async () => {
    if (/^[0-9]+$/.test(zipCode)) {
      const zipCodeFounded = await zipcodeService.getInfo(zipCode)
      if (zipCodeFounded) {
        onZipCodeInfo(zipCodeFounded)
        setMessage({
          type: ErrorType.SUCCESS,
          message: Constants.messages.success.founded
        })
      } else {
        onZipCodeInfo(undefined)
        setMessage({
          type: ErrorType.WARNING,
          message: Constants.messages.warning.notExists
        })
      }
    } else {
      onZipCodeInfo(undefined)
      setMessage({
        type: ErrorType.ERROR,
        message: Constants.messages.error.onlyNumbers
      })
    }
  }

  useEffect(() => {
    if (zipCode) {
      validate()
    } else {
      onZipCodeInfo(undefined)
      setMessage({
        type: ErrorType.INFO,
        message: Constants.messages.info.codeEmpty
      })
    }
  }, [zipCode])

  return <ZipCode message={message} zipCode={zipCode} handleChange={e => setZipCode(e.target.value)} />
}

export default ZipCodeContainer