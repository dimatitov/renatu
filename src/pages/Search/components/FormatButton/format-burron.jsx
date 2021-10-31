import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const FormatButton = ({ children, handleClickSwitchFormat, docFormat }) => {
  return (
    <div
      className={
        docFormat ? `wrapper-report-btn wrapper-report-btn--green` : `wrapper-report-btn`
      }
    >
      <button
        className={
          !docFormat
            ? `report-modal-form-format-container__format-btn`
            : `report-modal-form-format-container__format-btn report-modal-form-format-container__format-btn--hover`
        }
        type="button"
        onClick={handleClickSwitchFormat}
      >
        {children}
      </button>
    </div>
  )
}

FormatButton.propTypes = {
  children: PropTypes.string.isRequired,
  handleClickSwitchFormat: PropTypes.func.isRequired,
  docFormat: PropTypes.bool.isRequired,
}

export default FormatButton
