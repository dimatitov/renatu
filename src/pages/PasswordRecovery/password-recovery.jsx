import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './styles.scss'
import Logo from '@/assets/img/auth/logo.png'
import BtnArrow from '@/assets/img/auth/arrow.png'
import MyLoginInput from '@/components/MyLoginInput/my-login-input'
import { actionSaveEmail } from '@/store/user/actions'
import { thunkForgotPasswordResponse } from '@/store/user/thunks'

const PasswordRecovery = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleClickToBack = () => {
    history.push('/login')
  }

  return (
    <div className="modal-forgot form">
      <button className="back" onClick={handleClickToBack}>
        <img src={BtnArrow} alt="back" />
      </button>
      <img className="form__logo" src={Logo} alt="pegmatis" />
      <h2 className="modal-forgot__title">Восстановление пароля</h2>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string().required().email(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const recoveryEmail = values.email
          dispatch(thunkForgotPasswordResponse(recoveryEmail))
          dispatch(actionSaveEmail(recoveryEmail))
          history.push('/password-recovery-sent')
          setSubmitting(false)
        }}
      >
        <Form className="login-area modal-forgot__login-area">
          <MyLoginInput
            name="email"
            type="email"
            placeholder="Email address"
            className={'input-email recovery-email'}
          />
          <div className="btn-container">
            <button className="form__log-in" type="submit">
              Отправить
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default PasswordRecovery
