import React from 'react'
import { Card } from '../shopPageComponents/Card'
import TSOP from '../../albums/TSOP.jpg'
import Ride from '../../albums/RideTheLightning.jpg'
import Among from '../../albums/AmongTheLiving.jpg'
import Alice from '../../albums/AliceInHell.jpg'
import Torture from '../../albums/Torture.jpg'
import './Bestsellers.css'

export function Bestsellers() {
    return(
        <div className="bestsellers">
            <p>Bestsellers</p>
            <div className="albums">
                <Card source={Ride} title='Ride the Lightning' band='Metallica' page='Go to Store'/>
                <Card source={TSOP} title='The Sound of Perseverance' band='Death' page='Go to Store'/>
                <Card source={Among} title='Among the Living' band='Anthrax' page='Go to Store'/>
                <Card source={Alice} title='Alice in Hell' band='Annihilator' page='Go to Store'/>
                <Card source={Torture} title='Torture' band='Cannibal Corpse' page='Go to Store'/>
            </div>
        </div>
    )
}