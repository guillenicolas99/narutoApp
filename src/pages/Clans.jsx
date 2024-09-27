import useFetch from "../Hooks/useFetch"
import LoadingBtn from "../Components/LoadingBtn"

export default function Clans() {
    const { data, loading, error } = useFetch('https://narutodb.xyz/api/clan')

    if (loading) return <LoadingBtn />
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <h1>Lista de todos los clans</h1>
            {
                data.clans.map((clan, index) => <p key={clan.id}> <small>{index + 1}</small>. {clan.name}</p>)
            }
        </>
    )
}