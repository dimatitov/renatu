import React from 'react'
import PropTypes from 'prop-types'

const RightContainer = ({
  value = '',
  handleClick,
  imageReview = '',
  isEdit,
  editing,
}) => {
  return (
    <div className="right-content">
      {imageReview || value ? (
        <img
          className="cover-book"
          src={
            isEdit || editing
              ? `http://188.68.219.162/user-panel/book/get-avatar?avatar=${imageReview}`
              : imageReview
          }
          height="170"
          width="170"
          alt=""
        />
      ) : null}
      <button className="right-content__close-btn" type="button" onClick={handleClick} />
    </div>
  )
}

RightContainer.propTypes = {
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.string,
  isEdit: PropTypes.string,
}

export default RightContainer
