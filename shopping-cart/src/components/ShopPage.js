import { Navbar } from "./Navbar"
import { Sidebar } from "./shopPageComponents/Sidebar"
import { Card } from "./shopPageComponents/Card"
import Among from "../albums/AmongTheLiving.jpg"
import Alice from "../albums/AliceInHell.jpg"
import Bleed from "../albums/BleedTheFuture.jpg"
import Severed from "../albums/severedSurvival.jpg"
import Filosofem from "../albums/Filosofem.jpg"
import Torture from "../albums/Torture.jpg"
import Transilvanian from "../albums/Transilvanian.jpg"
import TSOP from "../albums/TSOP.jpg"
import Eclipse from "../albums/Eclipse.jpg"
import Lightning from "../albums/RideTheLightning.jpg"
import "./ShopPage.css"

export function Shop() {
    return (
        <>
            <Navbar />
            <div className="shopContent">
                <Sidebar />
                <div className="cards">
                    <Card source={Among} title='Among the Living' band='Anthrax'/>
                    <Card source={Alice} title='Alice in Hell' band='Annihilator'/>
                    <Card source={Bleed} title='Bleed the Future' band='Archspire'/>
                    <Card source={Severed} title='Severed Survival' band='Autopsy'/>
                    <Card source={Filosofem} title='Filosofem' band='Burzum'/>
                    <Card source={Torture} title='Torture' band='Cannibal Corpse'/>
                    <Card source={Transilvanian} title='Transilvanian Hunger' band='Darkthrone'/>
                    <Card source={TSOP} title='The Sound of Perseverance' band='Death'/>
                    <Card source={Eclipse} title='In The Nightside Eclipse' band='Emperor'/>
                    <Card source={Lightning} title='Ride the Lightning' band='Metallica'/>
                </div>
            </div>
        </>
    )
}