import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import { ToastContainer } from 'react-toastify'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import './styles.scss'
import Profile from '@/pages/Profile/profile'
import { GreenBtn } from '@/components/GreenBtn/green-btn'
import InputPassword from '@/pages/ProfileRecoveryPassword/components/InputPassword/input-password'
import BtnClose from '@/components/BtnClose/btn-close'
import { thunkChangePassword } from '@/store/profileManagement/thunks'
import { error } from '@/utils/respons-change-password'

const ProfileRecoveryPassword = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleClickToProfile = () => {
    history.push('/profile')
  }

  return (
    <section className="modal-recovery-container">
      <Profile className={`opacity`} />
      <div className="modal-recovery">
        <BtnClose handleClick={handleClickToProfile} />
        <div className={`modal-recovery__title`}>Изменить пароль для доступа</div>
        <Formik
          initialValues={{
            oldPassword: '',
            newPassword: '',
            repeatNewPassword: '',
          }}
          validationSchema={Yup.object({
            oldPassword: Yup.string().required(),
            newPassword: Yup.string().required(),
            repeatNewPassword: Yup.string().required(),
          })}
          onSubmit={(values, { setSubmitting }) => {
            const data = 'Пароли не совпадают'
            if (values.newPassword !== values.repeatNewPassword) {
              error(data)
            } else {
              dispatch(
                thunkChangePassword({
                  password: values.repeatNewPassword,
                  oldPwd: values.oldPassword,
                }),
              )
            }
            setSubmitting(false)
          }}
        >
          <Form className="modal-form">
            <InputPassword placeholder={'Старый пароль'} name={'oldPassword'} />
            <InputPassword placeholder={'Новый пароль'} name={'newPassword'} />
            <InputPassword
              placeholder={'Новый пароль еще раз'}
              name={'repeatNewPassword'}
            />
            <GreenBtn title={'Сохранить'} className={'modal-btn'} type={'submit'} />
          </Form>
        </Formik>
        <ToastContainer />
      </div>
    </section>
  )
}

export default ProfileRecoveryPassword
