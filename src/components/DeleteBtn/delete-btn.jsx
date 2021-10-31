import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

export const DeleteBtn = ({ availability = true, handleClick }) => (
  <button
    className={availability ? `delete delete--disabled` : `delete`}
    disabled={availability}
    onClick={handleClick}
  >
    Удалить
  </button>
)

DeleteBtn.propTypes = {
  availability: PropTypes.bool.isRequired,
  handleClick: PropTypes.func,
}
