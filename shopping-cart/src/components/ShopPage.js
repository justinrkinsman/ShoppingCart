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
                    <Card source={Among} title='Among the Living' band='Anthrax' page='Add to Cart' index='0'/>
                    <Card source={Alice} title='Alice in Hell' band='Annihilator' page='Add to Cart' index='1'/>
                    <Card source={Bleed} title='Bleed the Future' band='Archspire' page='Add to Cart' index='2'/>
                    <Card source={Severed} title='Severed Survival' band='Autopsy' page='Add to Cart' index='3'/>
                    <Card source={Filosofem} title='Filosofem' band='Burzum' page='Add to Cart' index='4'/>
                    <Card source={Torture} title='Torture' band='Cannibal Corpse' page='Add to Cart' index='5'/>
                    <Card source={Transilvanian} title='Transilvanian Hunger' band='Darkthrone' page='Add to Cart' index='6'/>
                    <Card source={TSOP} title='The Sound of Perseverance' band='Death' page='Add to Cart' index='7'/>
                    <Card source={Eclipse} title='In The Nightside Eclipse' band='Emperor' page='Add to Cart' index='8'/>
                    <Card source={Lightning} title='Ride the Lightning' band='Metallica' page='Add to Cart' index='9'/>
                </div>
            </div>
        </>
    )
}