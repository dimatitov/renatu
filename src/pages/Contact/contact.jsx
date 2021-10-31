import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './styles.scss'
import { thunkGetFriendsUser } from '@/store/contactManagement/thunks'
import UserCard from '@/components/UserCard/user-card'
import NavBetweenPages from '@/components/NavBetweenPages/nav-between-pages'

const Contact = () => {
  const dispatch = useDispatch()
  const friends = useSelector((store) => store.contactManagement.friends)
  useEffect(() => {
    dispatch(thunkGetFriendsUser())
  }, [])

  return (
    <section className="contact-container">
      <div className="contact-content">
        <div className="contact-top">
          <NavBetweenPages
            navTitle={true}
            linkAddress={'/profile'}
            linkTitle={'Профиль'}
            title={'Контакты коллег'}
          />
        </div>

        <div className="contact-cards">
          {friends.map((friend) => (
            <UserCard
              role={friend.role}
              key={friend._id}
              edit={friend.edit}
              report={friend.createReport}
              deleteBook={friend.delete}
              data={friend.update}
              email={friend.email}
              phone={friend.phone}
              firstName={friend.name}
              lastName={friend.lastname}
              middleName={friend.middlename}
              photoUser={friend.logo}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
