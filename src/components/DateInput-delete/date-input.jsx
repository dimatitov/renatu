import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const DateInputDelete = ({ title, className }) => {
  return (
    <div className={`date-input ${className}`}>
      <label htmlFor="date">{title}</label>
      <input type="date" className="date-from" id="date" />
    </div>
  )
}

DateInputDelete.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
}

export default DateInputDelete
