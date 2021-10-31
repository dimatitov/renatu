import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

export const StatusBtn = ({ status = '' }) => (
  <div className="status">
    Статус: <span>{status}</span>
  </div>
)

StatusBtn.propTypes = {
  status: PropTypes.string,
}
