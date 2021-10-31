import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import NotPhoto from '@/assets/img/contact/not-user.png'
import AccessItem from '@/components/AccessItem/access-item'

const UserCard = ({
  role,
  data,
  deleteBook,
  edit,
  email = '',
  firstName = '',
  lastName = '',
  middleName = '',
  phone = '',
  report,
  photoUser,
}) => {
  const userPhoto = photoUser.trim()
  return (
    <div className="user-card">
      <img
        src={
          userPhoto
            ? `http://188.68.219.162/user-panel/profile/get-logo?logo=${photoUser}`
            : NotPhoto
        }
        className="user-card__photo"
        alt={''}
      />
      <div className="user-info">
        <div className="personal-data">
          <div className="user-name">
            <div className="user-name__lastname">{lastName}</div>
            <div className="user-name__other-name">{`${firstName} ${middleName}`}</div>
            <div className="user-name__rank">
              {role === 'admin' ? `Администатор проекта` : `Пользователь проекта`}
            </div>
          </div>
          <div className="user-phone">
            <h4 className="user-phone__title">Телефон</h4>
            <div className="user-phone__number">{phone}</div>
          </div>
          <div className="user-email">
            <h4 className="user-email__title">Электронный адрес</h4>
            <div className="user-email__email">{email}</div>
          </div>
        </div>
        <div className="user-access">
          <ul className="user-access__access-list">
            <AccessItem accessTitle={'Ввод данных'} access={data} />
            <AccessItem accessTitle={'Редактироание документа'} access={edit} />
            <AccessItem accessTitle={'Формирование отчета'} access={report} />
            <AccessItem accessTitle={'Удаление'} access={deleteBook} />
          </ul>
        </div>
      </div>
    </div>
  )
}

UserCard.propTypes = {
  role: PropTypes.string.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  middleName: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  data: PropTypes.bool,
  edit: PropTypes.bool,
  report: PropTypes.bool,
  deleteBook: PropTypes.bool,
  photoUser: PropTypes.string,
}

export default UserCard
