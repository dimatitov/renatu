import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import IcoCorrect from '@/assets/img/profile/correct.png'
import IcoNotCorrect from '@/assets/img/profile/not_correct.png'

const AccessItem = ({ accessTitle, access }) => {
  return (
    <li className="access-list__item access-list__item--true">
      <img
        src={access ? IcoCorrect : IcoNotCorrect}
        alt={access ? IcoCorrect : IcoNotCorrect}
      />
      {accessTitle}
    </li>
  )
}

AccessItem.propTypes = {
  accessTitle: PropTypes.string.isRequired,
  access: PropTypes.bool,
}

export default AccessItem
