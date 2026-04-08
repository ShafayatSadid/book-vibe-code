import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider } from 'react-router'

import { router } from './router/router'
import { ToastContainer } from 'react-toastify'
import BookProvider from './context/BookContext'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router}></RouterProvider>
    </BookProvider>

    <ToastContainer />
  </StrictMode>,


)
