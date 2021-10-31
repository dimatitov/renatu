import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import ArrowTop from '@/assets/img/book/arrow-top.png'
import ArrowBottom from '@/assets/img/book/arrow-bottom.png'

export const BookDescription = ({ children, description = '', isDeploy, setState }) => {
  const handleClickUnrolling = () => {
    setState((state) => !state)
  }
  return (
    <Fragment>
      <div className="description-book">
        {`${children}: `}
        <p
          className={
            isDeploy
              ? `description-book__text description-book__text--deployed`
              : `description-book__text description-book__text--rolled-up`
          }
        >
          {description}
        </p>
      </div>
      <button className="expand" onClick={handleClickUnrolling}>
        <img src={isDeploy ? ArrowTop : ArrowBottom} alt="bottom" />
        {isDeploy ? `Свернуть` : `Развернуть`}
      </button>
    </Fragment>
  )
}

BookDescription.propTypes = {
  children: PropTypes.string.isRequired,
  description: PropTypes.string,
  isDeploy: PropTypes.bool.isRequired,
  setState: PropTypes.func.isRequired,
}
