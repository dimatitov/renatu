import React from 'react'
import './styles.scss'
import { useHistory } from 'react-router-dom'
import LangBtn from '@/components/LangBtn/lang-btn'
import BackBtn from '@/assets/img/main/back.png'
import UserBtn from '@/assets/img/main/user.png'
import Logo from '@/assets/img/main/logo.png'
import FooterLogo from '@/assets/img/main/logo-footer.png'
import MenuNavLayout from '@/components/MenuNavLayout/menu-nav-layout'
import FooterLayout from '@/components/FooterLayout/footer-layout'

const MainLayoutOpacity = ({ children }) => {
  const history = useHistory()

  const handleClickToBack = () => {
    history.push('/login')
  }

  const handleClickToProfile = () => {
    history.push('/profile')
  }

  const handleClickToSearch = () => {
    history.push('/search')
  }

  const handleClickToAddBook = () => {
    history.push('/book-management')
  }

  return (
    <section className="main-container-opacity">
      <MenuNavLayout
        handleClickToSearch={handleClickToSearch}
        handleClickToBack={handleClickToBack}
        handleClickToProfile={handleClickToProfile}
        handleClickToAddBook={handleClickToAddBook}
      />
      <main>{children}</main>
      <FooterLayout />
    </section>
  )
}

export default MainLayoutOpacity
