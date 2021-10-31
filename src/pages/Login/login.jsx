import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import './styles.scss'
import Logo from '@/assets/img/auth/logo.png'
import { thunkLogin } from '@/store/user/thunks'
import FormLogin from '@/components/FromLogin/form-login'

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const valid = useSelector((store) => store.user.invalidLogin)
  const role = useSelector((store) => store.user.role)
  const [validLogin, setValidLogin] = useState(false)

  useEffect(() => {
    setValidLogin(valid)
  }, [valid])

  useEffect(() => {
    if (role === 'user' || role === 'admin') {
      history.push('/profile')
    }
  }, [role])

  return (
    <div className="modal-login form">
      <img className="form__logo" src={Logo} alt="pegmatis" />
      <div
        className={
          !validLogin
            ? `modal-login__message`
            : `modal-login__message modal-login__message--invalid`
        }
      >
        {!validLogin
          ? `Для авторизации в личном кабинете пожалуйста введите свои личные данные`
          : `Логин или пароль введены не верно, пожалуйста попробуйте ввести другие данные`}
      </div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string().required(),
          password: Yup.string().required(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(
            thunkLogin({
              validEmail: values.email,
              validPassword: values.password,
            }),
          )
          setSubmitting(false)
        }}
      >
        <FormLogin />
      </Formik>
    </div>
  )
}

export default Login
