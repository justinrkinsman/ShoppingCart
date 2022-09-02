import { Navbar } from "./Navbar"
import { Sidebar } from "./shopPageComponents/Sidebar"
import { Card } from "./shopPageComponents/Card"

export function Shop() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Card />
        </>
    )
}