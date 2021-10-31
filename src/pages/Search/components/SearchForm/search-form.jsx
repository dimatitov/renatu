import React from 'react'
import './styles.scss'
import { Form } from 'formik'
import MySearchInput from '@/pages/Search/components/MySearchInput/my-search-input'
import MySelectSearch from '@/pages/Search/components/MySelectSearch/my-select-search'

const SearchForm = () => {
  return (
    <Form className="search-form">
      <MySearchInput
        name="search"
        className="search-form__input"
        placeholder="Введите поисковый запрос"
      />
      <MySelectSearch className="search-form__option" name="select">
        <option value="">Выбирите фильтр</option>
        <option value="nameDoc">По названию</option>
        <option value="authors">По автору</option>
        {/*<option value="section">По разделам</option>*/}
        {/*<option value="tags">По тегу</option>*/}
        {/*<option value="typeDoc">По виду документа</option>*/}
        {/*<option value="description">По описанию</option>*/}
        {/*<option value="rank">По рангу</option>*/}
      </MySelectSearch>
      <button className="search-form__btn" type={'submit'} />
    </Form>
  )
}

export default SearchForm
