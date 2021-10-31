import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import DateInput from '@/components/DateInput/date-input'

const FormDate = ({
  className,
  setStateDateStart,
  setStateDateEnd,
  dateEnd,
  dateStart,
  titleStart,
  titleEnd,
  nameEnd,
  nameStart,
}) => {
  return (
    <div className={`date ${className}`}>
      <DateInput
        title={titleStart}
        className={'date-company-form'}
        setState={setStateDateStart}
        date={dateStart}
        name={nameStart}
      />
      <div className="date-line line" />
      <DateInput
        title={titleEnd}
        className={'date-company-before'}
        setState={setStateDateEnd}
        date={dateEnd}
        name={nameEnd}
      />
    </div>
  )
}

FormDate.propTypes = {
  className: PropTypes.string,
  setStateDateStart: PropTypes.func.isRequired,
  setStateDateEnd: PropTypes.func.isRequired,
  dateEnd: PropTypes.object.isRequired,
  dateStart: PropTypes.object.isRequired,
  titleStart: PropTypes.string.isRequired,
  titleEnd: PropTypes.string.isRequired,
  nameEnd: PropTypes.string.isRequired,
  nameStart: PropTypes.string.isRequired,
}

export default FormDate
