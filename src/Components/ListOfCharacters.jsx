import { NavLink } from "react-router-dom"

export default function ListOfCharacters ({characters}) {
    return(
        <>
            {
                characters.map(singleCharacter => {
                    return (
                        <NavLink key={singleCharacter.id} to={`/character/${singleCharacter.id}`}>
                            <article>
                            <img src={singleCharacter.images} alt={singleCharacter.name} />
                            <h2> <span>{singleCharacter.id}</span> - {singleCharacter.name}</h2>
                            <p></p>
                        </article>
                        </NavLink>
                    )
                })
            }
        </>
    )
}