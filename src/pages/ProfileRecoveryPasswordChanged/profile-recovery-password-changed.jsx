import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles.scss'
import Profile from '@/pages/Profile/profile'
import { GreenBtn } from '@/components/GreenBtn/green-btn'
import BtnClose from '@/components/BtnClose/btn-close'

const ProfileRecoveryPasswordChanged = () => {
  const history = useHistory()
  const handleClickToProfile = () => {
    history.push('/profile')
  }

  return (
    <section className="modal-changed-container">
      <Profile className={`opacity`} />
      <div className="modal-changed">
        <BtnClose handleClick={handleClickToProfile} />
        <div className="modal-changed__title">Изменить пароль для доступа</div>
        <div className="modal-changed__description">Ваш пароль был успешно изменен</div>
        <GreenBtn
          title={'Закрыть'}
          handleClick={handleClickToProfile}
          className={'modal-changed__btn'}
        />
      </div>
    </section>
  )
}

export default ProfileRecoveryPasswordChanged
