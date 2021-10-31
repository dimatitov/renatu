import './styles.scss'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import LeftContainer from '@/components/AddPicture/components/left-container'
import RightContainer from '@/components/AddPicture/components/right-container'
import { thunkDeleteCoverBook } from '@/store/addBooks/thunks'

const AddPicture = ({
  title,
  className,
  bookCover,
  setState,
  bookReviewCover,
  nameBookCover,
  nameBookReviewCover,
  dispatch,
  bookId,
  isEdit,
}) => {
  const [editing, setEditing] = useState(!Boolean(bookCover))
  const handleChangeAddedCover = (e) => {
    setState(`${nameBookCover}`, e.target.files[0])
    setState(`${nameBookReviewCover}`, URL.createObjectURL(e.target.files[0]))
  }
  const handleClickToClearReviewCover = () => {
    setState(`${nameBookReviewCover}`, '')
    setState(`${nameBookCover}`, '')
    dispatch(
      thunkDeleteCoverBook({
        bookId: bookId,
      }),
    )
    setEditing(false)
  }
  return (
    <div className={`add-picture ${className}`}>
      <LeftContainer
        value={bookCover}
        title={title}
        handleChange={handleChangeAddedCover}
        name={nameBookCover}
      />
      <RightContainer
        handleClick={handleClickToClearReviewCover}
        imageReview={bookReviewCover}
        value={bookCover}
        isEdit={isEdit}
        editing={editing}
        setEditing={setEditing}
      />
    </div>
  )
}

AddPicture.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bookCover: PropTypes.string,
  setState: PropTypes.func.isRequired,
  bookReviewCover: PropTypes.string.isRequired,
  nameBookCover: PropTypes.string.isRequired,
  nameBookReviewCover: PropTypes.string.isRequired,
  bookId: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  isEdit: PropTypes.string,
}

export default AddPicture
