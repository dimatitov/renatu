import React from 'react'
import { useField } from 'formik'
import PropTypes from 'prop-types'

const LeftContainer = ({ handleChange, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="left-content">
      <div
        className={
          meta.touched && meta.error ? `left-content__title--err` : `left-content__title`
        }
      >
        {meta.touched && meta.error ? `Добавте логотип` : props.title}
      </div>
      <div className="left-content__btn">
        <input
          id={props.name}
          type="file"
          className="add-picture__add-button"
          accept=".png, .jpg, .jpeg"
          onChange={handleChange}
        />
        <label htmlFor={props.name}>
          <span className="add-button">Обзор</span>
        </label>
      </div>
    </div>
  )
}

LeftContainer.propTypes = {
  handleChange: PropTypes.func.isRequired,
}

export default LeftContainer
