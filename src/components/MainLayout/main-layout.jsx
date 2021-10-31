import React, { useEffect } from 'react'
import './styles.scss'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { thunkLogout } from '@/store/user/thunks'
import MenuNavLayout from '@/components/MenuNavLayout/menu-nav-layout'
import FooterLayout from '@/components/FooterLayout/footer-layout'

const MainLayout = ({ children }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const isReport = useSelector((store) => store.catalogBooks.isReport)

  const handleClickToBack = () => {
    dispatch(thunkLogout())
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
    <section className={`main-container`}>
      <MenuNavLayout
        handleClickToSearch={handleClickToSearch}
        handleClickToBack={handleClickToBack}
        handleClickToProfile={handleClickToProfile}
        handleClickToAddBook={handleClickToAddBook}
        isReport={isReport}
      />
      <main>{children}</main>
      <FooterLayout isReport={isReport} />
    </section>
  )
}

export default MainLayout
