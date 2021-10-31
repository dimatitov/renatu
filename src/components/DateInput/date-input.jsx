import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DateInput = ({ title, className, setState, date, name }) => {
  return (
    <div className={`date-input ${className}`}>
      <label htmlFor="date">{title}</label>
      <DatePicker
        onChange={(date) => setState(`${name}`, date)}
        className="date-from"
        selected={date}
        name={name}
        dateFormat="dd/MM/yyyy"
      />
    </div>
  )
}

DateInput.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
}

export default DateInput
