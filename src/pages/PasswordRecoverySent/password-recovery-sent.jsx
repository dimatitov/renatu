import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './styles.scss'
import Logo from '@/assets/img/auth/logo.png'
import CloseBtn from '@/assets/img/auth/close.png'

const PasswordRecoverySent = () => {
  const history = useHistory()
  const email = useSelector((store) => store.user.emailForRecovery)

  const handleClickToClose = () => {
    history.push('/login')
  }

  return (
    <div className="modal-feedback form">
      <button className="close" onClick={handleClickToClose}>
        <img src={CloseBtn} alt="close" />
      </button>
      <img className="form__logo" src={Logo} alt="pegmatis" />
      <h2 className="modal-feedback__title">Восстановление пароля</h2>
      <p className="modal-feedback__description">
        Инструкция для восстановления пароля отправлена на{' '}
        <span className="modal-feedback__email">{email}</span>
      </p>
      <div className="btn-container">
        <button className="form__log-in" onClick={handleClickToClose}>
          Закрыть
        </button>
      </div>
    </div>
  )
}

export default PasswordRecoverySent
