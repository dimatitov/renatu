import React from 'react'
import { useField } from 'formik'
import PropTypes from 'prop-types'
import './styles.scss'

const InputPassword = ({ ...props }) => {
  const [field, meta] = useField(props)
  return (
    <input
      className={
        meta.touched && meta.error
          ? `modal-password modal-password--err`
          : `modal-password`
      }
      type={'password'}
      {...field}
      {...props}
    />
  )
}

InputPassword.propTypes = {}

export default InputPassword
