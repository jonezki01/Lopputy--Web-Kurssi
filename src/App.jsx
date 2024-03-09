import React from 'react'
import './App.css'
import Frontpage from './components/Frontpage.jsx'
import Tictactoe from './components/Tictactoe.jsx'
import Woolshirt from './components/Woolshirt.jsx'
import Reactiontest from './components/Reactiontest.jsx'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Frontpage />} />
          <Route path='/ristinolla' element={<Tictactoe />} />
          <Route path='/villapaita' element={<Woolshirt />} />
          <Route path='/reaktiotesti' element={<Reactiontest />} />
        </Routes>
      </div>
    </>
  )
}

export default App