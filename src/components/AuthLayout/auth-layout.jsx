import React from 'react'
import './styles.scss'
import LangBtn from '@/components/LangBtn/lang-btn'
import LogoBottom from '@/assets/img/auth/vector-name.png'

const AuthLayout = ({ children }) => {
  return (
    <section className="login-container">
      <header className="language">
        <LangBtn />
      </header>
      <main className="modal-container">
        {children}
        <div className="company-name">
          <img className="company-name__name" src={LogoBottom} alt="Pegmatis" />
        </div>
      </main>
    </section>
  )
}

export default AuthLayout
