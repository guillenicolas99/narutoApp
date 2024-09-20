import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <main>
                <h2>NOT FOUND!!!</h2>
                <Link to='/'> Inicio </Link>
            </main>
        </>
    )
}