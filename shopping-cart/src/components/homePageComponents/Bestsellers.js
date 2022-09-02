import React from 'react'
import { Card } from '../shopPageComponents/Card'
import TSOP from '../../albums/TSOP.jpg'
import Ride from '../../albums/RideTheLightning.jpg'
import Among from '../../albums/AmongTheLiving.jpg'
import Alice from '../../albums/AliceInHell.jpg'
import Torture from '../../albums/Torture.jpg'

export function Bestsellers() {
    return(
        <div className="bestsellers">
            <p>Bestsellers</p>
            <Card source={Ride} title='Ride the Lightning' band='Metallica'/>
            <Card source={TSOP} title='The Sound of Perseverance' band='Death'/>
            <Card source={Among} title='Among the Living' band='Anthrax'/>
            <Card source={Alice} title='Alice in Hell' band='Annihilator'/>
            <Card source={Torture} title='Torture' band='Cannibal Corpse'/>
        </div>
    )
}