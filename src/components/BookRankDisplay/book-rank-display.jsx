import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import RadioStarGold from '@/assets/img/search/star_gold.png'
import RadioStarGray from '@/assets/img/search/star_not-gold.png'

const BookRankDisplay = ({ bookRank = 0 }) => {
  const rankStar = [1, 2, 3, 4, 5]
  return (
    <div className="info-rank">
      {/*<div className="info-rank__title">#345 в каталоге</div>*/}
      <ul className="rank-stars">
        {rankStar.map((rank, i) => {
          if (i >= bookRank) {
            return (
              <li className="rank-stars__item" key={Date.now() + i}>
                <img src={RadioStarGray} alt="star-gold" />
              </li>
            )
          }
          return (
            <li className="rank-stars__item" key={Date.now() + i}>
              <img src={RadioStarGold} alt="star-gold" />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

BookRankDisplay.propTypes = {
  bookRank: PropTypes.number,
}

export default BookRankDisplay
