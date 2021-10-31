import React from 'react'
import PropTypes from 'prop-types'

const FileLoaded = ({ fileFormat, idFile, setState }) => {
  const handleClickDeleteBook = (e) => {
    e.persist()
    setState((files) => files.filter((file) => file.size !== idFile))
  }
  return (
    <div className="files-loaded" id={idFile}>
      {fileFormat}
      <button
        className="files-loaded__button"
        type="button"
        onClick={handleClickDeleteBook}
      />
    </div>
  )
}

FileLoaded.propTypes = {
  fileFormat: PropTypes.string.isRequired,
  idFile: PropTypes.number.isRequired,
  setState: PropTypes.func.isRequired,
}

export default FileLoaded
