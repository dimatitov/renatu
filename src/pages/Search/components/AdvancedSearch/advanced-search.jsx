import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import { Form, Formik } from 'formik'
import { thunkAdvancedSearch } from '@/store/catalogBooks/thunks'
import InputForm from '@/components/InputForm/input-form'
import OptionSelect from '@/components/OtionSelect/option-select'
import { rank, status, typeDoc } from '@/mocks/option-mocks'
import TagsInput from '@/components/TagsInput/tags-input'
import FormDate from '@/components/FormDate/form-date'
import { actionSaveAdvancedSearch } from '@/store/catalogBooks/actions'

const AdvancedSearch = ({ dispatch, defaultDate, page, section }) => {
  return (
    <Formik
      initialValues={{
        authorName: '',
        bookName: '',
        description: '',
        typeDoc: '',
        section: '',
        status: '',
        rank: '',
        tags: [],
        dateStart: defaultDate,
        dateEnd: new Date(),
        page: page,
      }}
      onSubmit={(values) => {
        const tags = values.tags.map((tag) => tag.id)
        dispatch(
          thunkAdvancedSearch({
            authors: values.authorName,
            nameDoc: values.bookName,
            typeDoc: values.typeDoc,
            tags: tags,
            section: values.section,
            status: values.status,
            description: values.description,
            rank: values.rank,
            dateStart: values.dateStart,
            dateEnd: values.dateEnd,
            page: values.page,
          }),
        )
        dispatch(
          actionSaveAdvancedSearch({
            dateStart: values.dateStart || '',
            dateEnd: values.dateEnd || '',
            authors: values.authorName || '',
            nameDoc: values.bookName || '',
            typeDoc: values.typeDoc || '',
            tags: tags || '',
            section: values.section || '',
            status: values.status || '',
            description: values.description || '',
            rank: values.rank || '',
          }),
        )
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className="advanced-search-grid">
          <InputForm
            label="Ф.И.О. Автора"
            className="advanced-search-grid__author"
            name="authorName"
            type="text"
          />
          <InputForm
            label="Название книги"
            className="advanced-search-grid__book-name"
            name="bookName"
            type="text"
          />
          <OptionSelect
            label="Вид документа"
            className="advanced-search-grid__type"
            name="typeDoc"
            typeArray={typeDoc}
          />
          <InputForm
            label="Описнаие и содержание"
            className="advanced-search-grid__description"
            name="description"
            type="text"
          />
          <TagsInput
            className={'advanced-search-grid__tags'}
            name="tags"
            setField={setFieldValue}
          />
          <OptionSelect
            label="Раздел"
            className="advanced-search-grid__section"
            name="section"
            typeArray={section}
          />
          <OptionSelect
            label="Статус"
            className="advanced-search-grid__status"
            name="status"
            typeArray={status}
          />
          <FormDate
            setStateDateEnd={setFieldValue}
            setStateDateStart={setFieldValue}
            dateEnd={values.dateEnd}
            dateStart={values.dateStart}
            nameStart="dateStart"
            nameEnd="dateEnd"
            titleStart="Дата от"
            titleEnd="Дата до"
          />
          <OptionSelect
            label="Ранг"
            className="advanced-search-grid__rank"
            name="rank"
            typeArray={rank}
          />
          <OptionSelect
            label="Сортировать"
            className="advanced-search-grid__sort"
            name="sort"
            typeArray={typeDoc}
          />
          <button className="advanced-search__btn" type="submit">
            Искать
          </button>
        </Form>
      )}
    </Formik>
  )
}

AdvancedSearch.propTypes = {
  page: PropTypes.number,
  section: PropTypes.object.isRequired,
  defaultDate: PropTypes.any.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default AdvancedSearch
