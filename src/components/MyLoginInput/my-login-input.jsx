import React from 'react'
import './styles.scss'
import { useField } from 'formik'

const MyLoginInput = ({ className, ...props }) => {
  const [field, meta] = useField(props)
  return <input className={`login-area__input ${className}`} {...field} {...props} />
}

export default MyLoginInput
