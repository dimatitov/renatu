import React from 'react'
import './styles.scss'
import DateInput from '@/components/DateInput-delete/date-input'

const FormDate = () => {
  return (
    <div className="date">
      <DateInput className={'date-from'} title={'Дата публикации от'} />
      <div className="date-line" />
      <DateInput className={'date-to'} title={'Дата публикации до'} />
    </div>
  )
}

export default FormDate
