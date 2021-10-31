import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

export const GreenBtn = ({ title, className, handleClick, type, disabled }) => (
  <button
    className={`${disabled ? 'green-btn green-btn--disabled' : 'green-btn'} ${className}`}
    onClick={handleClick}
    type={type}
    disabled={disabled}
  >
    {title}
  </button>
)

GreenBtn.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
}
