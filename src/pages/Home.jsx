import { useEffect, useState } from "react"
import ListOfCharacters from "../Components/ListOfCharacters"
import useFetch from "../Hooks/useFetch";
import LoadingBtn from "../Components/LoadingBtn";

export default function Home() {
    const [currentpage, setCurrentPage] = useState(1)
    const API_URL = `https://narutodb.xyz/api/character?page=${currentpage}&limit=20`
    const { data, loading, error } = useFetch(API_URL)
    const [search, setSearch] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        console.log('submit')
    }

    const handdleChange = e => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    if (loading) return <LoadingBtn />
    if (error) return <p>Error: {error}</p>;

    if (!Array.isArray(data.characters)) return <p>No se encontraron personajes</p>

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
                            onChange={handdleChange}
                        />
                        <button type="submit">Buscar</button>
                    </fieldset>
                </form>

                <div className="characters-row container">
                    <ListOfCharacters characters={data?.characters} />
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
                    currentpage >= 0
                    && <button onClick={() => setCurrentPage(currentpage => currentpage + 1)}>
                        {currentpage + 1}
                    </button>
                }
            </div>
        </>
    )
}