import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className="container">
                <ul>
                    <li><strong>Naruto App</strong></li>
                </ul>
                <ul>
                <li><NavLink to={'/'}>Inicio</NavLink></li>
                    <li><NavLink to={'/clans'}>Clans</NavLink></li>
                    <li><NavLink to={'/about'}>Acerca de</NavLink></li>
                    <li><NavLink to={'contact'}>Contato</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}