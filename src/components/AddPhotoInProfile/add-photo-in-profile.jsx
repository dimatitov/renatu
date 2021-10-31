import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import NotPhoto from '@/assets/img/contact/not-user.png'

const AddPhotoInProfile = ({ profilePhoto, reviewPhoto, handleChange }) => {
  const profilePhotoUser = profilePhoto.trim()
  return (
    <div className="user-photo">
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        className="user-photo__add-photo"
        id="add-photo"
        onChange={handleChange}
      />
      <label className="wrapper" htmlFor="add-photo">
        <span className="user-photo__btn" />
      </label>
      <div className="user-photo__photo-container">
        {profilePhotoUser || reviewPhoto ? (
          <img
            src={
              reviewPhoto
                ? reviewPhoto
                : `http://188.68.219.162/user-panel/profile/get-logo?logo=${profilePhotoUser}`
            }
            alt={null}
            className="user-photo__change-photo"
          />
        ) : (
          <img src={NotPhoto} alt={'Фото нет'} className="user-photo__change-photo" />
        )}
      </div>
    </div>
  )
}

AddPhotoInProfile.propTypes = {
  profilePhoto: PropTypes.string,
  reviewPhoto: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
}

export default AddPhotoInProfile
