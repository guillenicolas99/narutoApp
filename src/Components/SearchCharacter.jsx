import CardCharacter from "./CardCharacter"

export default function SearchCharacter({ character }) {
    const result = character?.personal
    const { kekkeiGenkai } = character.personal
    const { occupation } = result
    const { sex } = result
    return (
        <>
            {
                character.length > 0
                    ? <p>No se encontró el personaje</p>
                    : <CardCharacter character={character} image={character.images}>
                        {kekkeiGenkai != undefined ? kekkeiGenkai?.map((el, index) => <small key={character.id}>{index}</small>) : null}
                        {occupation ? <p>{occupation}</p> : null}
                        {sex ? <p>{sex}</p> : null}
                    </CardCharacter>
            }
        </>
    )
}