import React from 'react'
import Hello from '@/Hello'
import { createHashRouter } from 'react-router-dom'
import App from '../App'

// createBrowserRouter
const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/hello',
    element: <Hello />,
  },
])

export default router
