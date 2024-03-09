import React from 'react'
import './Frontpage.css'
import kuva from '../img/TicTacToe.png'
import sakari from '../img/sakarivalmis.png'
import reaktio from '../img/reaktiotesti.png'
import { Link } from 'react-router-dom'

const Frontpage = () => {
  return (
    <>
      <div className="some-text">
        <h1 id="logo">Joonan <span>Pelit</span></h1>
        <p>Alapuolelta löydät muutamia pelejä mitä olen tehnyt tälle nettisivulle!</p>
      </div>

      <div className="games">
        <div>
          
          <p>Tic Tac Toe</p>
          <Link to='/ristinolla'><img src={kuva} className='tictactoe' /></Link>
        </div>
        <div>
          <p>Villapaita Peli</p>
          <Link to='/villapaita'><img src={sakari} className='tictactoe' /></Link>
        </div>
        <div>
          <p>Reaktiotesti</p>
          <Link to='/reaktiotesti'><img src={reaktio} className='tictactoe' /></Link>
        </div>
      </div>
    </>
  )
}

export default Frontpage