import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from '../App'
import HOC from './Higher-order-component/HOC'

const Body = () => {
  const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/> 
    },

    {
        path: '/hoc',
        element: <HOC/>
    }
  ])

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body