import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import './styles.scss'
import { GreenBtn } from '@/components/GreenBtn/green-btn'
import FormInput from '@/components/FormInput/form-input'
import {
  thunkGetCompany,
  thunkGetProfile,
  thunkUpdatePhotoProfile,
  thunkUpdateUserProfile,
} from '@/store/profileManagement/thunks'
import AccessItem from '@/components/AccessItem/access-item'
import AddPhotoInProfile from '@/components/AddPhotoInProfile/add-photo-in-profile'
import NavBetweenPages from '@/components/NavBetweenPages/nav-between-pages'
import { error, success } from '@/utils/respons-change-password'
import { TOAST_TEXT } from '@/constans/toast-text'

const Profile = ({ className }) => {
  const dispatch = useDispatch()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [edit, setEdit] = useState(false)
  const [bookDelete, setBookDelete] = useState(false)
  const [update, setUpdate] = useState(false)
  const [createReport, setCreateReport] = useState(false)
  const [firstSelect, setFirstSelect] = useState(false)
  const [reviewPhoto, setReviewPhoto] = useState(null)
  const [file, setFile] = useState(null)

  const profile = useSelector((store) => store.profileManagement.profile)
  const company = useSelector((store) => store.profileManagement.company)
  const profilePhoto = useSelector((store) => store.profileManagement.logo)
  const defaultEdit = profile.edit
  const defaultDelete = profile.delete
  const defaultUpdate = profile.update
  const defaultFirstSelect = profile.firstSelect
  const defaultCreateReport = profile.createReport
  const defaultFirstName = profile.name
  const defaultLastName = profile.lastname
  const defaultMiddleName = profile.middlename
  const defaultEmail = profile.email
  const defaultPhone = profile.phone
  const defaultCompanyName = company.title

  useEffect(() => {
    dispatch(thunkGetProfile())
    dispatch(thunkGetCompany())
  }, [])
  useEffect(() => {
    setFirstName(defaultFirstName)
    setEmail(defaultEmail)
    setPhone(defaultPhone)
    setLastName(defaultLastName)
    setMiddleName(defaultMiddleName)
    setCompanyName(defaultCompanyName)
    setBookDelete(defaultDelete)
    setEdit(defaultEdit)
    setCreateReport(defaultCreateReport)
    setUpdate(defaultUpdate)
    setFirstSelect(defaultFirstSelect)
  }, [profile, defaultCompanyName])

  const handleSubmitUpdateProfile = () => {
    if (
      firstName === defaultFirstName &&
      lastName === defaultLastName &&
      middleName === defaultMiddleName &&
      phone === defaultPhone &&
      file === null
    ) {
      error(TOAST_TEXT.NO_DATA_TO_CHANGE)
    } else {
      dispatch(
        thunkUpdateUserProfile({
          firstName,
          lastName,
          middleName,
          phone,
        }),
      )
      dispatch(
        thunkUpdatePhotoProfile({
          file,
        }),
      )
      success(TOAST_TEXT.DATA_MODIFIED)
    }
  }

  const handleChangeReviewPhoto = (e) => {
    setReviewPhoto(URL.createObjectURL(e.target.files[0]))
    setFile(e.target.files[0])
  }

  return (
    <section className={`profile-container ${className}`}>
      <div className="profile-content">
        <div className="profile-top">
          <NavBetweenPages
            navTitle={false}
            linkAddress={'/contact'}
            linkTitle={'Профиль'}
            title={'Контакты коллег'}
          />
          <Link
            to={'/profile-recovery-password'}
            className="profile-top__change-password"
          >
            Изменить пароль
          </Link>
        </div>
        <div className="profile-main">
          <AddPhotoInProfile
            profilePhoto={profilePhoto}
            reviewPhoto={reviewPhoto}
            handleChange={handleChangeReviewPhoto}
          />
          <form action="" className="profile-main__form form-profile">
            <div className="grid-container">
              <FormInput
                labelTitle={'Фамилия'}
                labelClass={'label-lastname'}
                inputClass={'input-lastname'}
                inputTitle={lastName}
                inputId={'lastname'}
                setState={setLastName}
              />
              <FormInput
                labelTitle={'Имя'}
                labelClass={'label-firstname'}
                inputClass={'input-firstname'}
                inputTitle={firstName}
                inputId={'firstname'}
                setState={setFirstName}
              />
              <FormInput
                labelTitle={'Отчество'}
                labelClass={'label-patronymic'}
                inputClass={'input-patronymic'}
                inputTitle={middleName}
                inputId={'patronymic'}
                setState={setMiddleName}
              />
            </div>
            <div className="grid-container">
              <FormInput
                labelTitle={'Телефон'}
                labelClass={'label-phone'}
                inputClass={'input-phone'}
                inputTitle={phone}
                inputId={'phone'}
                setState={setPhone}
              />
              <FormInput
                labelTitle={'Электронный адресс'}
                labelClass={'label-email'}
                inputClass={'input-email'}
                inputTitle={email}
                inputId={'email'}
                disabled={true}
              />
              <FormInput
                labelTitle={'Компания'}
                labelClass={'label-company'}
                inputClass={'input-company'}
                inputTitle={companyName}
                inputId={'company'}
                disabled={true}
              />
            </div>
          </form>
        </div>
        <div className="profile-footer">
          <h3 className="profile-footer__access">Права Доступа</h3>
          <ul className="profile-footer__access-list access-list">
            <AccessItem accessTitle={'Первичный отбор'} access={firstSelect} />
            <AccessItem accessTitle={'Ввод данных'} access={edit} />
            <AccessItem accessTitle={'Редактироание документа'} access={update} />
            <AccessItem accessTitle={'Формирование отчета'} access={createReport} />
            <AccessItem accessTitle={'Удаление'} access={bookDelete} />
          </ul>
          <GreenBtn title={'сохранить'} handleClick={handleSubmitUpdateProfile} />
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Profile
