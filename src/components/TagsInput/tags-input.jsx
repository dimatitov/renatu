import React, { useEffect, useState } from 'react'
import { useField } from 'formik'
import { get, uniqBy } from 'lodash'
import './styles.scss'
import { WithContext as ReactTags } from 'react-tag-input'
import { useDispatch, useSelector } from 'react-redux'
import { thunkGetAllTags } from '@/store/catalogBooks/thunks'

const TagsInput = ({ className, setField, name, valuesTags }) => {
  const dispatch = useDispatch()
  const [field, meta] = useField(name)
  const [tags, setTags] = useState([])
  // for Redux Store
  const tagsList = useSelector((store) => get(store, ['catalogBooks', 'tags'], []))
  const bookTags = useSelector((store) => get(store, ['catalogBooks', 'bookTags'], []))
  console.log('bookTags', bookTags)
  // tags from server to display
  const suggestions = tagsList.map((tag) => {
    return {
      id: tag.title,
      text: tag.title,
    }
  })
  // default tags this book
  // const defaultTags = bookTags.map((tag) => {
  //   return {
  //     id: tag,
  //     text: tag,
  //   }
  // })

  useEffect(() => {
    dispatch(thunkGetAllTags())
  }, [])
  // combining tags to display them in edit mode
  useEffect(() => {
    const defaultTags = bookTags.map((tag) => {
      return {
        id: tag,
        text: tag,
      }
    })
    setTags(tags.concat(defaultTags))
  }, [bookTags])
  // save tags in initial State Formik
  useEffect(() => {
    setField(`${name}`, tags)
  }, [tags])

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i))
  }
  const handleAddition = (tag) => {
    setTags([...tags, tag])
  }
  const handleTagClick = (index) => {}
  const KeyCodes = {
    enter: 13,
  }
  const delimiters = [KeyCodes.enter]

  return (
    <div
      className={meta.error && meta.touched ? `${className} tags-error` : `${className}`}
    >
      <ReactTags
        tags={tags}
        suggestions={suggestions}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleTagClick={handleTagClick}
        allowUnique={true}
        inline={true}
        name={name}
      />
    </div>
  )
}

export default TagsInput
