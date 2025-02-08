
import { createBrowserRouter, Route, RouterProvider } from 'react-router'
import './App.css'
import { createRoutesFromElements } from 'react-router'
import LayoutOne from './Components/Layouts/LayoutOne'
import Home from './Components/pages/Home'
import app from './firebase.config'


function App() {

  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
