import checkBoxCorrect from '@/assets/img/profile/correct.png'
import checkBoxNotCorrect from '@/assets/img/profile/not_correct.png'
import React from 'react'
import { useField } from 'formik'
import './styles.scss'

const CheckboxReport = ({ children, setField, value, ...props }) => {
  const [field, meta] = useField(props)
  const switchCheckbox = (e) => {
    setField(`${props.name}`, !value)
  }
  return (
    <div className="settings-checkbox">
      <label
        htmlFor={field.name}
        className="settings-checkbox__label"
        onClick={switchCheckbox}
      >
        <span>{children}</span>
        <img
          src={field.value ? checkBoxCorrect : checkBoxNotCorrect}
          alt=""
          width="20"
          height="20"
        />
        <input type="checkbox" className="settings-checkbox__setting" {...props} />
      </label>
    </div>
  )
}

export default CheckboxReport
