import React, { useState, useRef} from 'react'
import './Woolshirt.css'
import sakari from '../img/sakarivalmis.png'
import villapaita from '../img/sakarinvillapaita.png'
import sakari2 from '../img/sakarikesken.png'
import arrow from '../img/back-button.png'
import { Link } from 'react-router-dom'

const Woolshirt = () => {
    const [visibleImage, setVisibleImage] = useState()
    const peliRef = useRef(null)

    const puenPaidan = () => {
        if (visibleImage !== 'sakarikuva1') {
            setVisibleImage('sakarikuva1')
            peliRef.current.innerHTML = "Hih hih hii, kutittaa! Voitit pelin!"
        }
    }

    const enPuePaitaa = () => {
        peliRef.current.innerHTML = "Sakarilla on kylmä! Hävisit pelin!"
    }

    return (
        <>
            <Link to='/'><img src={arrow} className='back-home'></img></Link>
            <div className='paita-peli'>
                <h1 id='title'>Sakarin <span>Villapaita Peli</span></h1>
                <div className='sakari'>
                    {visibleImage === 'sakarikuva1' && (
                        <div className='sakari-valmis'>
                            <img src={sakari} className='sakarikuva1'></img>
                        </div>
                    )}
                    {visibleImage !== 'sakarikuva1' && (
                        <>
                            <div className='sakari-kesken'>
                                <img src={sakari2} className='sakarikuva2'></img>
                            </div>
                            <div className='sakari-villapaita'>
                                <img src={villapaita} className='sakarikuva3'></img>
                            </div>
                        </>
                    )}
                </div>

                <h2 className='peli-ilmoitus' ref={peliRef}>Pue Sakarille Villapaita</h2>
                <div className='painikkeet'>
                    <button id='pukeminen' onClick={puenPaidan}>Puen</button>
                    {visibleImage !== 'sakarikuva1' && (
                        <button id='en-pue' onClick={enPuePaitaa}>En pue</button>
                    )}
                </div>
            </div>
        </>
    )
}

export default Woolshirt
