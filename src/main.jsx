import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import ViewStory from './ViewStory.jsx'
import Profile from './Profile.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/story/:id',
    element: <ViewStory />
  },
  {
    path : '/profile',
    element: <Profile/>
  }
],
  {
    basename: '/InstagramClone'
  }
)
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
