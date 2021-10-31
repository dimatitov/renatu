import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import { StatusBtn } from '@/components/StatusBtn/status-btn'
import { NightBlueBtn } from '@/components/NightBlueBtn/night-blue-btn'
import { DeleteBtn } from '@/components/DeleteBtn/delete-btn'

const BookMenu = ({
  availabilityEdit,
  availabilityDelete,
  status,
  handleClickDeletingBook,
  editBookChange,
}) => {
  return (
    <div className="book-menu">
      <StatusBtn status={status} />
      <div className="book-btn-control">
        <NightBlueBtn
          title={'Редактировать'}
          availability={availabilityEdit}
          editBook={editBookChange}
        />
        <DeleteBtn
          availability={availabilityDelete}
          handleClick={handleClickDeletingBook}
        />
      </div>
    </div>
  )
}

BookMenu.propTypes = {
  availabilityEdit: PropTypes.bool.isRequired,
  availabilityDelete: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
  handleClickDeletingBook: PropTypes.func,
}

export default BookMenu
