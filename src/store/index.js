import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '@/store/user/reducer'
import { profileManagement } from '@/store/profileManagement/reducer'
import { contactManagement } from '@/store/contactManagement/reducer'
import { catalogBooks } from '@/store/catalogBooks/reducer'
import { addBooks } from '@/store/addBooks/reducer'

export default configureStore({
  reducer: {
    user: userReducer,
    profileManagement: profileManagement,
    contactManagement: contactManagement,
    catalogBooks: catalogBooks,
    addBooks: addBooks,
  },
})
