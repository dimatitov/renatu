import { Formik } from 'formik'
import { thunkGetAllBooks } from '@/store/catalogBooks/thunks'
import SearchForm from '@/pages/Search/components/SearchForm/search-form'
import React from 'react'

const SearchPlain = ({ dispatch }) => {
  return (
    <Formik
      initialValues={{
        search: '',
        select: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        const search = values.search
        const select = values.select
        dispatch(
          thunkGetAllBooks({
            search,
            select,
          }),
        )
        setSubmitting(false)
      }}
    >
      <SearchForm />
    </Formik>
  )
}

export default SearchPlain
