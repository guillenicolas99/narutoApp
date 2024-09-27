export default function SearchCharacter({ character }) {
    console.log(character)
    return (
        <>
            {
                character.length > 0
                    ? <p>No se encontró el personaje</p>
                    : <article>
                        <header>
                            <img src={character.images} alt="" />
                        </header>

                        <h4>{character.name}</h4>
                        {character?.personal?.kekkeiGenkai ? <p>{character?.personal?.kekkeiGenkai}</p> : null}
                        {character?.personal?.occupation ? <p>{character?.personal?.occupation}</p> : null}
                        {character?.personal?.sex ? <p>{character?.personal?.sex}</p> : null}
                    </article>
            }
        </>
    )
}