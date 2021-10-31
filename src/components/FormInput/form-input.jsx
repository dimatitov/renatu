import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const FormInput = ({
  inputClass,
  inputId,
  inputTitle,
  labelClass,
  labelTitle,
  setState,
  disabled,
  type,
}) => {
  return (
    <div className={`${inputClass} wrapper-container`}>
      <label htmlFor={inputId} className={labelClass}>
        {labelTitle}
      </label>
      <input
        type={type ? type : 'text'}
        id={inputId}
        className="form-profile__item"
        defaultValue={inputTitle}
        onChange={(e) => setState(e.target.value)}
        disabled={disabled}
      />
    </div>
  )
}

FormInput.propTypes = {
  inputClass: PropTypes.string.isRequired,
  type: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  inputTitle: PropTypes.string,
  labelClass: PropTypes.string.isRequired,
  labelTitle: PropTypes.string.isRequired,
  setState: PropTypes.func,
  disabled: PropTypes.bool,
}

export default FormInput
