import React from 'react'
import PropTypes from 'prop-types'
import './syles.scss'

const FormSearch = ({ children, className, setState, value }) => {
  return (
    <div className={`advanced-search-wrapper ${className} form-input`}>
      <label
        htmlFor="input"
        className={
          value ? `form-input__label form-input__label--top` : `form-input__label`
        }
      >
        {children}
      </label>
      <input
        className="form-input__input"
        type="text"
        id="input"
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  )
}

FormSearch.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  setState: PropTypes.func,
  value: PropTypes.string,
}

export default FormSearch
