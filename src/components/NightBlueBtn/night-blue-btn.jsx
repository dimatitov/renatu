import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

export const NightBlueBtn = ({ title, className, availability = true, editBook }) => (
  <button
    className={
      availability ? `blue-btn blue-btn--disabled ${className}` : `blue-btn ${className}`
    }
    disabled={availability}
    type={'button'}
    onClick={editBook}
  >
    {title}
  </button>
)

NightBlueBtn.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  availability: PropTypes.bool.isRequired,
  editBook: PropTypes.func,
}
