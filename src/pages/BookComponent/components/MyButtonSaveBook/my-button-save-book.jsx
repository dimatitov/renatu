import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import './styles.scss'
import { thunkDownloadBook } from '@/store/catalogBooks/thunks'

const MyButtonSaveBook = ({
  iconButton,
  children,
  classFormatButton,
  docFile = '',
  formatFile = '',
}) => {
  const dispatch = useDispatch()
  useEffect(() => {}, [docFile])
  const handleClickToDownloadBook = () => {
    if (docFile) {
      dispatch(
        thunkDownloadBook({
          book: docFile,
          format: formatFile,
        }),
      )
    }
  }
  return (
    <button
      className={`${classFormatButton} save-btn`}
      rel="noopener noreferrer"
      onClick={handleClickToDownloadBook}
      disabled={!docFile}
    >
      <img src={iconButton} alt="save" />
      {children}
    </button>
  )
}

MyButtonSaveBook.propTypes = {
  iconButton: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  classFormatButton: PropTypes.string.isRequired,
  docFile: PropTypes.string,
}

export default MyButtonSaveBook
