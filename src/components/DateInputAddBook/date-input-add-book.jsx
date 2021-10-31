import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DateInputAddBook = ({ className, setState, date, name, title }) => {
  return (
    <div className={`date-add-book ${className}`}>
      <label htmlFor="date">{title}</label>
      <DatePicker
        selected={date}
        onChange={(date) => setState(`${name}`, date)}
        name={name}
        dateFormat="dd/MM/yyyy"
      />
    </div>
  )
}

DateInputAddBook.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
}

export default DateInputAddBook
