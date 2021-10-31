import React from 'react'
import { useField } from 'formik'
import StarRatingComponent from 'react-star-rating-component'
import PropTypes from 'prop-types'
import './styles.scss'

const BookRankRadioInput = ({ setState, values, ...props }) => {
  const [field, meta] = useField(props)
  const onStarClick = (nextValue, prevValue, name) => {
    setState(name, nextValue)
  }
  return (
    <div className={`add-book-rank`}>
      <div
        className={
          meta.error && meta.touched
            ? `add-book-rank__title add-book-rank__title--err`
            : `add-book-rank__title`
        }
      >
        {meta.error && meta.touched ? `Добавте ранг` : `Ранг`}
      </div>
      <div className="add-book-rank__stars">
        <StarRatingComponent
          starCount={5}
          onStarClick={onStarClick}
          {...field}
          {...props}
        />
      </div>
    </div>
  )
}

BookRankRadioInput.propTypes = {
  setState: PropTypes.func.isRequired,
  values: PropTypes.number,
}

export default BookRankRadioInput
