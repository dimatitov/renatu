import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'

const OptionSearch = ({ children, className, option }) => {
  return (
    <div className={`advanced-option-wrapper ${className}`}>
      <label htmlFor="option">{children}</label>
      <select id="option">
        <option>{option}</option>
      </select>
    </div>
  )
}

OptionSearch.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
}

export default OptionSearch
