import { useEffect, useState } from "react"
import ListOfCharacters from "../Components/ListOfCharacters"
import useFetch from "../Hooks/useFetch";
import LoadingBtn from "../Components/LoadingBtn";
import SearchCharacter from "../Components/SearchCharacter";

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1)
    const [search, setSearch] = useState(null)
    const [apiUrl, setApiUrl] = useState(`https://narutodb.xyz/api/character?page=${currentPage}&limit=20`)
    const { data, loading, error } = useFetch(apiUrl)

    useEffect(() => {
        const searchUrl = `https://narutodb.xyz/api/character/search?name=${search}`
        const charactersUrl = `https://narutodb.xyz/api/character?page=${currentPage}&limit=20`
        search ? setApiUrl(searchUrl) : setApiUrl(charactersUrl)
    }, [currentPage, search]);

    const handleSubmit = e => {
        e.preventDefault()
        const { characterName } = Object.fromEntries(new window.FormData(e.target))
        setSearch(characterName)
    }

    if (loading) return <LoadingBtn />
    if (error) return (
        <>
            <p>Error: {error}</p>
            <button onClick={() => window.location.reload()}>Ir a inicio</button>
        </>
    )

    return (
        <>
            <section className='characters-sec container'>
                <h3 className="title-left">Personajes de Naruto</h3>

                <form onSubmit={handleSubmit} role="search">
                    <fieldset role="group">
                        <input
                            type="search"
                            name="characterName"
                            placeholder="Nombre"
                            aria-label="Search"
                        />
                        <button type="submit">Buscar</button>
                    </fieldset>
                </form>

                <div className="characters-row container">
                    {
                        search != null
                            ? <SearchCharacter character={data} />
                            : <ListOfCharacters characters={data?.characters} />
                    }
                </div>
            </section>

            {
                search == null
                    ? <div className="pagination">
                        {
                            currentPage > 1
                            && <button onClick={() => setCurrentPage(currentpage => currentpage - 1)}>
                                {currentPage - 1}
                            </button>
                        }
                        <button disabled className='current-btn'>{currentPage}</button>
                        {
                            currentPage >= 0
                            && <button onClick={() => setCurrentPage(currentpage => currentpage + 1)}>
                                {currentPage + 1}
                            </button>
                        }
                    </div>
                    : null
            }
        </>
    )
}