import React, { useEffect, useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './styles.scss'
import { get } from 'lodash'
import { GreenBtn } from '@/components/GreenBtn/green-btn'
import { thunkGetAllBooks } from '@/store/catalogBooks/thunks'
import BookList from '@/pages/Search/components/BookList/book-list'
import ControlPage from '@/components/ControlePage/controle-page'
import { thunkGetProfile } from '@/store/profileManagement/thunks'
import SearchPlain from '@/pages/Search/components/SearchPlain/search-plain'
import AdvancedSearch from '@/pages/Search/components/AdvancedSearch/advanced-search'
import SearchTypeNav from '@/pages/Search/components/SearchTypeNav/search-type-nav'
import { actionOpenReport, actionSaveNumPage } from '@/store/catalogBooks/actions'
import { thunkGetAllSection } from '@/store/addBooks/thunks'
import GenerateReport from '@/pages/Search/components/GenerateReport/generate-report'

const Search = () => {
  const dispatch = useDispatch()

  const [searchType, setSearchType] = useState(true)

  const books = useSelector((store) => store.catalogBooks.books)
  const countPage = useSelector((store) => store.catalogBooks.countPage)
  const profile = useSelector((store) => store.profileManagement.profile)
  const numPage = useSelector((store) => store.catalogBooks.page)
  const section = useSelector((store) => store.addBooks.allSection)
  const isReport = useSelector((store) => store.catalogBooks.isReport)
  const query = useSelector((store) => store.catalogBooks.query)
  const filename = useSelector((store) => store.catalogBooks.filename)

  const editBook = get(profile, ['edit'], false)
  const deleteBook = get(profile, ['delete'], false)
  const createReport = get(profile, ['createReport'], true)

  const pageCount = Math.ceil(countPage / 3)
  const dateTwoDaysAge = new Date().getTime() - 2 * 24 * 60 * 60 * 1000
  const defaultDate = new Date(dateTwoDaysAge)

  useEffect(() => {
    dispatch(thunkGetProfile())
  }, [])

  useEffect(() => {}, [filename])

  useEffect(() => {
    const select = ''
    dispatch(
      thunkGetAllBooks({
        select,
      }),
    )
  }, [])

  useEffect(() => {
    console.log(isReport)
  }, [isReport])

  useEffect(() => {
    dispatch(thunkGetAllSection())
  }, [])

  const handleChangeCurrentPage = (select) => {
    const page = select.selected + 1
    dispatch(actionSaveNumPage({ page }))
    dispatch(
      thunkGetAllBooks({
        page,
      }),
    )
  }

  const clickToVisibleModal = () => {
    dispatch(
      actionOpenReport({
        isReport: true,
      }),
    )
  }

  const clickToCloseModal = () => {
    console.log('CLICK TO X')
    dispatch(
      actionOpenReport({
        isReport: false,
      }),
    )
  }

  const handleChangeBookDelete = () => {
    console.log('click')
  }

  return (
    <Fragment>
      <section className={isReport ? `search-container--blur` : `search-container`}>
        <div className="search-content">
          <div className="search-top">
            <SearchTypeNav
              firstTitle={'Поиск'}
              secondTitle={'Расширенный поиск'}
              searchType={searchType}
              handleSearchType={setSearchType}
            />
          </div>
          {searchType ? (
            <SearchPlain dispatch={dispatch} />
          ) : (
            <AdvancedSearch
              dispatch={dispatch}
              defaultDate={defaultDate}
              page={numPage}
              section={section}
            />
          )}
          <BookList
            bookList={books}
            count={countPage}
            edit={editBook}
            deleteBook={deleteBook}
            handleDeleteBook={handleChangeBookDelete}
            dispatch={dispatch}
          />
        </div>
        <div className="search-nav">
          {pageCount === 1 ? null : (
            <ControlPage handleChange={handleChangeCurrentPage} pageCount={pageCount} />
          )}
          <GreenBtn
            title={'сформировать отчет'}
            type={'button'}
            handleClick={clickToVisibleModal}
            disabled={!createReport}
          />
        </div>
      </section>
      <GenerateReport
        handleClickToCloseModal={clickToCloseModal}
        isReport={isReport}
        query={query}
        filename={filename}
      />
    </Fragment>
  )
}

export default Search
