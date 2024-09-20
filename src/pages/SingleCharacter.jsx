import { useEffect, useState } from "react"
import getCharacterById from "../services/getCharaterById"
import { useParams } from "react-router-dom"

export default function SingleCharacter() {
    let { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        getCharacterById(id).then(data => {
            setCharacter(data)
        })
    }, [id])

    return (
        <>
            <h1>SingleCharacter</h1>
            <article>
                <img src={character.images} alt={character.name} />
                <p>{character.name}</p>
            </article>
        </>
    )
}