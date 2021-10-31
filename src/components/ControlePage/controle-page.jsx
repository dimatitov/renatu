import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import ReactPaginate from 'react-paginate'

const ControlPage = ({ handleChange, pageCount }) => {
  return (
    <div className="control-pages">
      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
        breakLabel={'...'}
        pageCount={pageCount}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        breakLinkClassName={'pagination__link'}
        previousLinkClassName={'pagination__preview'}
        nextLinkClassName={'pagination__next'}
        activeLinkClassName={'pagination__active-link'}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'pagination__active'}
        pageClassName={'pagination__num'}
        onPageChange={handleChange}
      />
    </div>
  )
}

ControlPage.propTypes = {
  handleChange: PropTypes.func.isRequired,
  pageCount: PropTypes.any.isRequired,
}

export default ControlPage
