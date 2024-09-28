import { Children } from 'react';

export default function CardCharacter({ character, image, children }) {
    return (
        <article>
            <img src={image} alt={character.name} />
            <footer>

                <h4 className="card-title">{character.name}</h4>
                {character?.debut?.appearsIn && <small>{character.debut.appearsIn}</small>}
                {character?.personal?.clan && <p>{character.personal.clan}</p>}
                {
                    children
                }
            </footer>
        </article>
    )
}