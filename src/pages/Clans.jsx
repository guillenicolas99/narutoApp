import { useEffect, useState } from "react"
import getClans from "../services/getClans"

export default function Clans() {

    const [clans, setClans] = useState([])

    useEffect(() => {
        getClans().then(data => {
            const response = data.clans ? data.clans : []
            setClans(response)
        })
    }, [])
    
    return (
        <>
        <h1>Lista de todos los clans</h1>
            {
                clans.map((clan, index) => <p key={clan.id}> <small>{ index + 1 }</small>. {clan.name}</p>)
            }
        </>
    )
}