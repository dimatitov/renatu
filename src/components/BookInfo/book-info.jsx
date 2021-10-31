import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

export const BookInfo = ({ children, description }) => (
  <div className="information-book">
    {`${children}: `}
    <span>{`${description}`}</span>
  </div>
)

BookInfo.propTypes = {
  children: PropTypes.string,
  description: PropTypes.any,
}
