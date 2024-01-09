
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'


import Register from './pages/Register'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GiveReview from './pages/GiveReview'

function App() {


  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/:username' element={<GiveReview/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
     
   </Routes>
   <ToastContainer/>
    </>
  )
}

export default App
