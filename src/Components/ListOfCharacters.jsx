import { NavLink } from "react-router-dom"

export default function ListOfCharacters({ characters }) {
    return (
        <>
            {
                characters.map(singleCharacter => {
                    const img = singleCharacter?.images.length > 0 ? singleCharacter.images : 'https://img.freepik.com/foto-gratis/arte-papel-artesanal-x-roja_53876-74766.jpg?t=st=1727369977~exp=1727373577~hmac=f48512ab6c003a8e72df467ee4f2b766d5d8bdc0c5dc560152d9f431a993ae0a&w=826'
                    return (
                        <NavLink key={singleCharacter.id} to={`/character/${singleCharacter.id}`}>
                            <article>
                                <img src={img} alt={singleCharacter.name} />
                                <footer>

                                    <h4 className="card-title">{singleCharacter.name}</h4>
                                    {singleCharacter?.debut?.appearsIn && <small>{singleCharacter.debut.appearsIn}</small>}
                                    {singleCharacter?.personal?.clan && <p>{singleCharacter.personal.clan}</p>}
                                </footer>
                            </article>
                        </NavLink>
                    )
                })
            }
        </>
    )
}