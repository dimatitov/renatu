import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import './styles.scss'
import { useField } from 'formik'
import PropTypes from 'prop-types'

const TextArea = ({ label, className, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className={`textarea-wrapper ${className}`}>
      <label
        htmlFor={props.id || props.name}
        className={
          field.value
            ? `textarea-wrapper__label textarea-wrapper__label--top`
            : `textarea-wrapper__label`
        }
      >
        {label}
      </label>
      <TextareaAutosize
        minRows={2}
        maxRows={30}
        className={
          meta.error && meta.touched
            ? `textarea-wrapper__textarea textarea-wrapper__textarea--err`
            : `textarea-wrapper__textarea`
        }
        {...field}
        {...props}
      />
    </div>
  )
}

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default TextArea
