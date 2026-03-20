import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import FeedPage from './pages/FeedPage'
import ProfilePage from './pages/ProfilePage'
import PostPage from './pages/PostPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <FeedPage /> },
      { path: 'profile/:pubkey', element: <ProfilePage /> },
      { path: 'post/:id', element: <PostPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
