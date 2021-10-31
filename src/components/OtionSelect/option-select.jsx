import { useField } from 'formik'
import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import { map } from 'lodash'

const OptionSelect = ({ typeArray, label, className, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className={`advanced-option-wrapper ${className}`}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.error && meta.touched ? `error` : ``}
        multiple={false}
      >
        {map(typeArray, (elem, key) => {
          return (
            <option key={key} value={key}>
              {elem.title}
            </option>
          )
        })}
      </select>
    </div>
  )
}

OptionSelect.propTypes = {
  typeArray: PropTypes.any,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default OptionSelect
