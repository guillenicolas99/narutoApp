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

    return (
        <>
            <h1>Personajes de Naruto</h1>

            <section className='characters-row'>
                {
                    isLoading
                        ? <h2>LOADING...</h2>
                        : <ListOfCharacters characters={characters} />
                }
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