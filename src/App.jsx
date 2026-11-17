import { useState } from 'react'
import { MyHeader } from './Components/MyHeader'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import {Home} from './Pages/Home'
import {Tvshows } from './Pages/Tvshows'
import { Movies } from './Pages/Movies'
  import {NotFound } from './Pages/NotFound'
const myRouter = createBrowserRouter([
  {
    element: <MyHeader />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/movies',
        element: <Movies />
      },
      {
        path: '/tv',
        element: <Tvshows />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])


function App() {
  

  return <RouterProvider router={myRouter} />
}

export default App
