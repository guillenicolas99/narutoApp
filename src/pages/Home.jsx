import { useEffect, useState } from "react"
import LoadingBtn from "../Components/LoadingBtn";

export default function Home() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    console.log(characters);

    useEffect(() => {
        setLoading(true);
        fetch('https://dattebayo-api.onrender.com/characters')
            .then(res => res.json())
            .then(data => setCharacters(data.characters))
            .catch(() => setError("Ocurrió un error al cargar los personajes"))
            .finally(() => setLoading(false));
    }, [])

    if (loading) {
        return <LoadingBtn />
    }

    if (error) {
        return <p className="text-red-500 text-center">{error}</p>
    }

    return (
        <>
            <h1 className="text-4xl font-bold text-center my-3 text-white">Naruto App</h1>
            <h2 className="text-2xl font-bold text-center my-3 text-white">Lista de personajes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-16 gap-5 py-15">
                {
                    characters.map(singleCharacter => (
                        <article
                            key={singleCharacter.id}
                            className="relative group bg-gray-800 w-full rounded-md shadow-xl overflow-hidden cursor-pointer transition-all duration-300 ease-in-out"
                        >
                            {/* Imagen */}
                            <img
                                className="w-full h-[200px] object-cover group-hover:scale-110 transition-transform duration-300"
                                src={singleCharacter.images[0]}
                                alt={singleCharacter.name}
                                loading="lazy"
                            />

                            {/* Overlay con info (tooltip expandido) */}
                            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center">
                                <h3 className="text-white text-lg font-bold">{singleCharacter.name}</h3>
                                <p className="text-white text-sm mt-2">{singleCharacter.about}</p>
                            </div>
                        </article>
                    ))
                }
            </div>
        </>
    )
}
