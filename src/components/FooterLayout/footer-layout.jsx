import FooterLogo from '@/assets/img/main/logo-footer.png'
import React from 'react'

const FooterLayout = ({ isReport }) => {
  return (
    <footer className={isReport ? `main-footer--blur` : `main-footer`}>
      <img src={FooterLogo} className="main-footer__logo" />
      <p className="main-footer__copyright">© Pegmatis</p>
    </footer>
  )
}

export default FooterLayout
