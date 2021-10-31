import React from 'react'
import { useField } from 'formik'

const MySearchInput = ({ ...props }) => {
  const [field, meta] = useField(props)
  return <input type="search" {...field} {...props} />
}

export default MySearchInput
