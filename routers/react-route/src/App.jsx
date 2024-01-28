import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Index from './components'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useRouteError
} from 'react-router-dom'
import ErrorPage from './components/Error'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <>
          <Route element={<Home/>} path='/' />
          <Route element={<About/>} path='/about'/>
      </>

      )
    
  )
  return (
    <>
     <RouterProvider router={route}/>
   </>
  )
}

export default App
