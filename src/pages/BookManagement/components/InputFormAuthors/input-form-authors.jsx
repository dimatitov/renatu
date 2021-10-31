import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useField } from 'formik'
import PropTypes from 'prop-types'
import './styles.scss'
import { actionSaveAuthors } from '@/store/addBooks/actions'

const InputFormAuthors = ({ className, label, setField, values, index, name }) => {
  const [field, meta] = useField(name)
  const dispatch = useDispatch()
  const [author, setAuthor] = useState({})
  const handleInputTextInField = (e) => {
    setAuthor({
      [index]: e.target.value,
    })
  }
  // console.log("author",author);
  // useEffect(() => {
  //   setField(`${name}`, {
  //     ...values,
  //     author
  //   })
  // }, [])
  return (
    <div className={`advanced-search-wrapper ${className} form-input`}>
      <label
        htmlFor={name}
        className={
          values.length !== 0
            ? `form-input__label form-input__label--top`
            : `form-input__label`
        }
      >
        {label}
      </label>
      <input
        className={
          meta.error && meta.touched
            ? `form-input__input form-input__input--err`
            : `form-input__input`
        }
        onChange={handleInputTextInField}
        name={name}
        defaultValue={values}
      />
    </div>
  )
}

InputFormAuthors.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default InputFormAuthors
