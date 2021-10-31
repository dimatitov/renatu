import React, { useEffect, useState } from 'react'
import './styles.scss'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { thunkLogout } from '@/store/user/thunks'
import Book from '@/pages/BookComponent/components/Book/book'
import { thunkGetBook } from '@/store/catalogBooks/thunks'
import { thunkGetProfile } from '@/store/profileManagement/thunks'
import MenuNavLayout from '@/components/MenuNavLayout/menu-nav-layout'
import FooterLayout from '@/components/FooterLayout/footer-layout'
import { get } from 'lodash'

const BookComponents = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { bookId } = useParams()
  const id = bookId
  const book = useSelector((store) => store.catalogBooks.book)
  const authors = useSelector((store) => store.catalogBooks.authors)
  const profile = useSelector((store) => store.profileManagement.profile)
  const coverBook = useSelector((store) => store.catalogBooks.coverBook)
  const editBook = get(profile, ['edit'], false)
  const deleteBook = get(profile, ['delete'], false)
  const [isDeployAnnotation, setIsDeployAnnotation] = useState(false)
  const [isDeployContent, setIsDeployContent] = useState(false)

  useEffect(() => {
    dispatch(
      thunkGetBook({
        bookId,
      }),
    )
  }, [])

  useEffect(() => {
    dispatch(thunkGetProfile())
  }, [])

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
  const changeBook = () => {
    history.push(`/book-management?isEdit=true&bookId=${id}`)
  }

  return (
    <section className="main-container">
      <MenuNavLayout
        handleClickToSearch={handleClickToSearch}
        handleClickToBack={handleClickToBack}
        handleClickToProfile={handleClickToProfile}
        handleClickToAddBook={handleClickToAddBook}
      />
      <main>
        <Book
          bookInfo={book}
          bookAuthors={authors}
          userProfile={profile}
          cover={coverBook}
          editBook={editBook}
          deleteBook={deleteBook}
          editBookChange={changeBook}
          isDeployAnnotation={isDeployAnnotation}
          isDeployContent={isDeployContent}
          setIsDeployAnnotation={setIsDeployAnnotation}
          setIsDeployContent={setIsDeployContent}
        />
      </main>
      <FooterLayout />
    </section>
  )
}

export default BookComponents
