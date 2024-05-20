import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Contact from '../../pages/Contact'
import Help from '../../pages/Help'
import Layout from '../Layout/Layout'

const Dashboard = () => {

  const paths = createBrowserRouter([
        {
            path:"/",
            element:<Layout/>,
            children:[
                {
                    index:true,
                    element:<Home/>
                },
                {
                    path:'/about',
                    element:<About/>
                },
                {
                    path:'/contact',
                    element:<Contact/>
                },
                {
                    path:'/help',
                    element:<Help/>
                }
            ]
        }
    ])
  return (
    <div>
        <RouterProvider router={paths}/>
    </div>
  )
}

export default Dashboard