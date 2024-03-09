import React, { useState, useRef } from 'react'
import './Tictactoe.css'
import cross from '../img/TicTacToeX.png'
import circle from '../img/TicTacToeO.png'
import arrow from '../img/back-button.png'
import { Link } from 'react-router-dom'


let info = ["", "", "", "", "", "", "", "", ""]


const Tictactoe = () => {

    const [count, setCount] = useState(0)
    const [lock, setLock] = useState(false)
    const titleRef = useRef(null);

    const won = (winner) => {
        setLock(true)
        if (winner === "x") {
            titleRef.current.innerHTML = `Voittaja on! <img src='${cross}' />`
        } else {
            titleRef.current.innerHTML = `Voittaja on! <img src='${circle}' />`
        }
    }

    const toggle = (e, num) => {
        if (lock) {
            return 0
        }
        if (info[num] !== "") {
            return 0
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${cross}' />`
            info[num] = "x"
            setCount(count + 1)

        } else {
            e.target.innerHTML = `<img src='${circle}' />`
            info[num] = "o"
            setCount(count + 1)
        }
        console.log(`${num}`)
        if (count === 8) {
            checkDraw()
        }
        checkVictory()
    }

    const checkVictory = () => {
        if (info[0] === info[3] && info[3] === info[6] && info[0] !== "") {
            won(info[0])
        } else if (info[1] === info[4] && info[4] === info[7] && info[1] !== "") {
            won(info[1])
        } else if (info[2] === info[5] && info[5] === info[8] && info[2] !== "") {
            won(info[2])
        } else if (info[0] === info[1] && info[1] === info[2] && info[0] !== "") {
            won(info[0])
        } else if (info[3] === info[4] && info[4] === info[5] && info[3] !== "") {
            won(info[3])
        } else if (info[6] === info[7] && info[7] === info[8] && info[6] !== "") {
            won(info[6])
        } else if (info[0] === info[4] && info[4] === info[8] && info[0] !== "") {
            won(info[0])
        } else if (info[2] === info[4] && info[4] === info[6] && info[2] !== "") {
            won(info[2])
        }
    }

    const checkDraw = () => {
        if (count === 8) {
            titleRef.current.innerHTML = "Tasapeli!"
            setLock(true)
        }
    }

    const resetBoard = () => {
        info = ["", "", "", "", "", "", "", "", ""]
        setCount(0)
        setLock(false)
        let squares = document.querySelectorAll('.square')
        squares.forEach(square => {
            square.innerHTML = ""
            titleRef.current.innerHTML = "Tic Tac Toe"
        })
    }

    return (
        <>
            <Link to='/'><img src={ arrow } className='back-home'></img></Link>
            <div className='tictactoe-game'>
                <h1 className='title' ref={titleRef}>Tic Tac Toe</h1>
                <div className='board'>
                    <div className='row1'>
                        <div className='square' onClick={(e) => { toggle(e, 0) }}></div>
                        <div className='square' onClick={(e) => { toggle(e, 1) }}></div>
                        <div className='square' onClick={(e) => { toggle(e, 2) }}></div>
                    </div>
                    <div className='row2'>
                        <div className='square' onClick={(e) => { toggle(e, 3) }}></div>
                        <div className='square' onClick={(e) => { toggle(e, 4) }}></div>
                        <div className='square' onClick={(e) => { toggle(e, 5) }}></div>
                    </div>
                    <div className='row3'>
                        <div className='square' onClick={(e) => { toggle(e, 6) }}></div>
                        <div className='square' onClick={(e) => { toggle(e, 7) }}></div>
                        <div className='square' onClick={(e) => { toggle(e, 8) }}></div>
                    </div>
                </div>
                <button className='reset' onClick={resetBoard}>RESET</button>
            </div>
        </>
    )
}

export default Tictactoe
