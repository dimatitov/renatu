import React from 'react'
import { Form } from 'formik'
import MyLoginInput from '@/components/MyLoginInput/my-login-input'
import { Link } from 'react-router-dom'

const FormLogin = () => {
  return (
    <Form className={'login-area modal-login__login-area'}>
      <MyLoginInput name="email" type="email" placeholder="Email" />
      <MyLoginInput name="password" type="password" placeholder="Password" />
      <Link to={`/password-recovery`} className="modal-login__forgot">
        Забыли пароль?
      </Link>
      <div className="btn-container">
        <button type="submit" className="form__log-in">
          Войти
        </button>
      </div>
    </Form>
  )
}

export default FormLogin
