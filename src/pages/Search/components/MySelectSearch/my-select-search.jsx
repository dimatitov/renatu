import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

const MySelectSearch = ({ label, className, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <select {...field} {...props} className={className} />
    </>
  )
}

MySelectSearch.propTypes = {
  className: PropTypes.string.isRequired,
}

export default MySelectSearch
