import React from 'react'
import './styles.scss'
import RadioStarGold from '@/assets/img/search/star_gold.png'

export const BookRank = () => (
  <div className="info-rank">
    <div className="info-rank__title">#345 в каталоге</div>
    <ul className="rank-stars">
      <li className="rank-stars__item">
        <img src={RadioStarGold} alt="star-gold" />
      </li>
      <li className="rank-stars__item">
        <img src={RadioStarGold} alt="star-gold" />
      </li>
      <li className="rank-stars__item">
        <img src={RadioStarGold} alt="star-gold" />
      </li>
      <li className="rank-stars__item">
        <img src={RadioStarGold} alt="star-gold" />
      </li>
      <li className="rank-stars__item">
        <img src={RadioStarGold} alt="star-gold" />
      </li>
    </ul>
  </div>
)
