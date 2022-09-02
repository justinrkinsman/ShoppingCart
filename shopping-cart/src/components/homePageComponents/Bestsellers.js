import React from 'react'
import { Card } from '../shopPageComponents/Card'

export function Bestsellers() {
    return(
        <div className="bestsellers">
            <p>Bestsellers</p>
            <Card source='' title='Ride the Lightning' band='Metallica'/>
            <Card source='' title='The Sound of Perseverance' band='Death'/>
            <Card source='' title='Among the Living' band='Anthrax'/>
            <Card source='' title='Alice in Hell' band='Annihilator'/>
            <Card source='' title='Torture' band='Cannibal Corpse'/>
        </div>
    )
}