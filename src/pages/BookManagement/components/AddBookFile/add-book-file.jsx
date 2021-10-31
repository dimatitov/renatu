import React, { useState, useEffect } from 'react'
import { useField } from 'formik'
import './styles.scss'
import { get } from 'lodash'
import PropTypes from 'prop-types'
import FileLoaded from '@/pages/BookManagement/components/AddBookFile/components/FileLoaded/file-loaded'
import { useDispatch } from 'react-redux'
import { actionSaveBooks } from '@/store/addBooks/actions'

const AddBookFile = ({ setField, name, valuesField }) => {
  const [files, setFiles] = useState([])
  const [field, meta] = useField(name)
  const dispatch = useDispatch()

  const handleSaveFiles = (e) => {
    e.persist()
    setFiles((files) =>
      [...files, e.target.files[0]].filter((x) => x !== undefined && x !== null),
    )
  }

  useEffect(() => {
    setField(`${name}`, files)
    // dispatch(actionSaveBooks({
    //   files
    // }))
  }, [files])

  return (
    <div className="add-book-files">
      <div
        className={
          meta.error && meta.touched
            ? `add-book-files__title--err`
            : `add-book-files__title`
        }
      >
        {meta.touched && meta.error ? `Добавте книги` : `Файлы с книгами`}
      </div>
      <input
        type="file"
        className="add-book-files__input"
        accept=".pdf, .doc, .epub, .fb2, .docx"
        id="book-file"
        multiple={true}
        onChange={handleSaveFiles}
        name={name}
      />
      <label htmlFor="book-file" className="add-book">
        <span className="add-book-files__button">Загрузить</span>
      </label>
      <div className="add-book-files__format-files">
        {files.map((file, i) => {
          const re = /.docx|.fb2|.doc|.pdf/gs
          const name = get(file, ['name'], '')
          const fileName = name.match(re) || ''
          const fileFormat = get(fileName, '0', '').slice(1)

          return (
            <FileLoaded
              key={Date.now() + i}
              idFile={file.size}
              fileFormat={fileFormat}
              setState={setFiles}
              files={files}
            />
          )
        })}
      </div>
    </div>
  )
}

AddBookFile.propTypes = {}

export default AddBookFile
