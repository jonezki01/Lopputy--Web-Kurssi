import React, { useState, useRef } from 'react'
import './Reactiontest.css'
import arrow from '../img/back-button.png'
import { Link } from 'react-router-dom'

const minimumTimeToChange = 3000
const maximumTimeToChange = 8000

let msTimer = 0
let waitingForClick = false
let timerId = null

const Reactiontest = () => {
    const [backgroundColor, setBackgroundColor] = useState()
    const displayTextRef = useRef(null)

    function start() {
        const timeToChange = Math.floor(Math.random() * (maximumTimeToChange - minimumTimeToChange)) + minimumTimeToChange

        displayTextRef.current.innerHTML = 'Odota vihreää'
        timerId = setTimeout(() => {
            msTimer = Date.now()
            setBackgroundColor('green')
            waitingForClick = true
        }, timeToChange)

        if (waitingForClick) {
            const score = Date.now() - msTimer
            displayTextRef.current.innerHTML = `Reaktioaika: ${score}ms`
            waitingForClick = false
        }
    }

    function resetGame() {
        displayTextRef.current.innerHTML = 'Paina aloittaaksesi'
        setBackgroundColor('white')
        clearTimeout(timerId)
    }

    return (
        <>
            <Link to='/'><img src={ arrow } className='back-home'></img></Link>
            <div className='reaction-game'>
                <h1 className='title'>Reaction <span>Test</span></h1>
                <div className='reaction-box' onClick={start} style={{ backgroundColor: backgroundColor }}>
                    <div className='display-text' ref={displayTextRef}>Paina aloittaaksesi</div>
                </div>
                <button className='reset-game' onClick={resetGame}>Reset</button>
            </div>
        </>
    )
}

export default Reactiontest
