import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const TagsList = ({ tags = [], className }) => {
  return (
    <div className={className}>
      {tags.map((tag, i) => (
        <span key={Date.now() + i}>{tag}, </span>
      ))}
    </div>
  )
}

TagsList.propTypes = {
  tags: PropTypes.array,
  className: PropTypes.string.isRequired,
}

export default TagsList
