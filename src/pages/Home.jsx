import { useEffect, useState } from "react"
import ListOfCharacters from "../Components/ListOfCharacters"
// import { useParams } from "react-router-dom"
import getCharacters from "../services/getCharacters"

export default function Home() {
    // let page = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [characters, setCharacters] = useState([])
    const [currentpage, setCurrentPage] = useState(1)
    const [paginationSize, setPaginationSize] = useState(0)

    useEffect(() => {
        setIsLoading(true)
        getCharacters(currentpage)
            .then(data => {
                const { characters } = data
                const response = characters ? characters : []
                setCharacters(response)
            })
            .finally(() => setIsLoading(false))
    }, [currentpage])

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <>

            <section className='characters-sec container'>
                <h3 className="title-left">Personajes de Naruto</h3>

                <form onSubmit={handleSubmit} role="search">
                    <fieldset role="group">
                        <input
                            type="search"
                            name="search"
                            placeholder="Nombre o clan"
                            aria-label="Search"
                        />
                        <button type="submit">Buscar</button>
                    </fieldset>
                </form>

                <div className="characters-row container">
                    {
                        isLoading
                            ? <button aria-busy="true" className="outline contrast">Please wait…</button>
                            : <ListOfCharacters characters={characters} />
                    }
                </div>
            </section>

            <div className="pagination">
                {
                    currentpage > 1
                    && <button onClick={() => setCurrentPage(currentpage => currentpage - 1)}>
                        {currentpage - 1}
                    </button>
                }
                <button disabled className='current-btn'>{currentpage}</button>
                {
                    currentpage >= paginationSize
                    && <button onClick={() => setCurrentPage(currentpage => currentpage + 1)}>
                        {currentpage + 1}
                    </button>
                }
            </div>
        </>
    )
}