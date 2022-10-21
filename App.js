import * as React from 'react'
import { useState } from 'react'
import MainContainer from './navigation/MainContainer'
import Login from './navigation/Login'

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return(
    isLoggedIn ? <MainContainer /> : <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    // <MainContainer> </MainContainer>
  )
}