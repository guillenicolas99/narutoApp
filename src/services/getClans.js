export default function getClans() {
    const API_URL = 'https://narutodb.xyz/api/clan'

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