import React from 'react'
import { useField } from 'formik'
import PropTypes from 'prop-types'
import './styles.scss'

const InputForm = ({ className, label, ...props }) => {
  const [field, meta] = useField(props)
  const value = field.value
  return (
    <div className={`advanced-search-wrapper ${className} form-input`}>
      <label
        htmlFor={props.id || props.name}
        className={
          value ? `form-input__label form-input__label--top` : `form-input__label`
        }
      >
        {label}
      </label>
      <input
        className={
          meta.error && meta.touched
            ? `form-input__input form-input__input--err`
            : `form-input__input`
        }
        {...field}
        {...props}
      />
    </div>
  )
}

InputForm.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default InputForm
