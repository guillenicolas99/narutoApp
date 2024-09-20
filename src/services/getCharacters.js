export default function getCharacters(currentPage = '1') {
    const API_URL = `https://narutodb.xyz/api/character?page=${currentPage}&limit=20`

    return fetch(API_URL)
        .then(async res => {
            if (!res.ok) throw new Error('Error en la Petición')
            return await res.json()
        })
        .then(res => res)
        .catch(err => {
            console.error(err)
        })
}