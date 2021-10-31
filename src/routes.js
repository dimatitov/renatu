import Login from '@/pages/Login/login.jsx'
import PasswordRecovery from '@/pages/PasswordRecovery/password-recovery.jsx'
import PasswordRecoverySent from '@/pages/PasswordRecoverySent/password-recovery-sent.jsx'
import NotFound from '@/pages/NotFound/not-found.jsx'
import AuthLayout from '@/components/AuthLayout/auth-layout.jsx'
import MainLayout from '@/components/MainLayout/main-layout.jsx'
import Profile from '@/pages/Profile/profile.jsx'
import Contact from '@/pages/Contact/contact.jsx'
import Search from '@/pages/Search/search.jsx'
import BookManagement from '@/pages/BookManagement/book-management.jsx'
import ProfileRecoveryPassword from '@/pages/ProfileRecoveryPassword/profile-recovery-password.jsx'
import ProfileRecoveryPasswordChanged from '@/pages/ProfileRecoveryPasswordChanged/profile-recovery-password-changed.jsx'
import MainLayoutOpacity from '@/components/MainLayoutOpacity/main-layout-opacity.jsx'
import BookComponents from '@/pages/BookComponent/book-component'

export const ROUTES = [
  {
    path: '/login',
    component: Login,
    exact: true,
    layout: AuthLayout,
    isPrivate: false,
  },
  {
    path: '/password-recovery',
    component: PasswordRecovery,
    exact: true,
    layout: AuthLayout,
    isPrivate: false,
  },
  {
    path: '/password-recovery-sent',
    component: PasswordRecoverySent,
    exact: true,
    layout: AuthLayout,
    isPrivate: false,
  },
  {
    path: '/profile',
    component: Profile,
    exact: true,
    layout: MainLayout,
    isPrivate: false,
  },
  {
    path: '/profile-recovery-password',
    component: ProfileRecoveryPassword,
    exact: true,
    layout: MainLayoutOpacity,
    isPrivate: false,
  },
  {
    path: '/profile-recovery-password-changed',
    component: ProfileRecoveryPasswordChanged,
    exact: true,
    layout: MainLayoutOpacity,
    isPrivate: false,
  },
  {
    path: '/contact',
    component: Contact,
    exact: true,
    layout: MainLayout,
    isPrivate: false,
  },
  {
    path: '/search',
    component: Search,
    exact: true,
    layout: MainLayout,
    isPrivate: false,
  },
  {
    path: '/book/:bookId',
    component: BookComponents,
    exact: true,
    // layout: MainLayout,
    isPrivate: false,
  },
  {
    path: '/book-management',
    component: BookManagement,
    exact: true,
    layout: MainLayout,
    isPrivate: false,
  },
  {
    path: '*',
    component: NotFound,
    exact: false,
    layout: null,
    isPrivate: false,
  },
]
