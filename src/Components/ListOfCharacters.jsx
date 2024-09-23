import { NavLink } from "react-router-dom"

export default function ListOfCharacters({ characters }) {
    return (
        <>
            {
                characters.map(singleCharacter => {
                    return (
                        <NavLink key={singleCharacter.id} to={`/character/${singleCharacter.id}`}>
                            <article>
                                <img src={singleCharacter.images} alt={singleCharacter.name} />
                                <h4>{singleCharacter.name}</h4>
                                {singleCharacter?.personal?.clan ? <p>{singleCharacter.personal.clan}</p> : null}
                            </article>
                        </NavLink>
                    )
                })
            }
        </>
    )
}