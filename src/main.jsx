import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Routes/Route'
import AuthProviders from './Pages/Providers/AuthProviders'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <Toaster></Toaster>
    <RouterProvider router={Route}></RouterProvider>
    </AuthProviders>
    
  </React.StrictMode>,
)
