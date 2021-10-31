import React from 'react'
import './styles.scss'

const SearchTypeNav = ({ firstTitle, searchType, secondTitle, handleSearchType }) => {
  const handleClickChangeType = (e) => {
    e.persist()
    handleSearchType((type) => !type)
  }
  return (
    <div className="search-type-nav">
      <button
        className={
          searchType ? `search-type-nav__focus-title` : `search-type-nav__link-title`
        }
        onClick={handleClickChangeType}
      >
        {firstTitle}
      </button>
      <button
        className={
          searchType ? `search-type-nav__link-title` : `search-type-nav__focus-title`
        }
        onClick={handleClickChangeType}
      >
        {secondTitle}
      </button>
    </div>
  )
}

export default SearchTypeNav
