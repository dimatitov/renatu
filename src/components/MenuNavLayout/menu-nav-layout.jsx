import React from 'react'
import PropTypes from 'prop-types'
import BackBtn from '@/assets/img/main/back.png'
import UserBtn from '@/assets/img/main/user.png'
import Logo from '@/assets/img/main/logo.png'
import LangBtn from '@/components/LangBtn/lang-btn'

const MenuNavLayout = ({
  handleClickToBack,
  handleClickToProfile,
  handleClickToSearch,
  handleClickToAddBook,
  isReport = '',
}) => {
  return (
    <header className={isReport ? `menu-nav--blur` : `menu-nav`}>
      <div className="user-nav">
        <div className="user-nav__buttons user-control">
          <button className="user-control__btn" onClick={handleClickToBack}>
            <img src={BackBtn} alt="back" />
          </button>
          <button
            className="user-control__btn user-control__btn--indents"
            onClick={handleClickToProfile}
          >
            <img src={UserBtn} alt="user" />
          </button>
        </div>
        <div className="user-nav__name">Владимир Иванов</div>
      </div>
      <div className="button-nav">
        <button
          className="button-nav__catalog button-nav__btn"
          onClick={handleClickToSearch}
        >
          каталог
        </button>
        <img className="logo" src={Logo} alt="Pegmatis" />
        <button
          className="button-nav__add button-nav__btn"
          onClick={handleClickToAddBook}
        >
          добавить
        </button>
      </div>
      <div className="lang-nav">
        <LangBtn />
      </div>
    </header>
  )
}

MenuNavLayout.propTypes = {
  handleClickToBack: PropTypes.func.isRequired,
  handleClickToProfile: PropTypes.func.isRequired,
  handleClickToSearch: PropTypes.func.isRequired,
  handleClickToAddBook: PropTypes.func.isRequired,
  isReport: PropTypes.bool,
}

export default MenuNavLayout
