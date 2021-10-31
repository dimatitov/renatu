import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'

const BtnClose = ({ handleClick }) => {
  return <button className="btn-close" onClick={handleClick} />
}

BtnClose.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default BtnClose
