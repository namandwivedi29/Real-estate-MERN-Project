 import React from 'react'
 import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Header from './Component/Header'


 export default function App() {
   return (
     <BrowserRouter>
     <Header></Header>
     <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/profile' element={ <Profile/>}/>
      <Route path='/about' element={ <About/>}/>
      <Route path='/signin' element={ <SignIn/>}/>
      <Route path='/signup' element={ <SignUp/>}/>
     </Routes>
     </BrowserRouter>
   )
 }
