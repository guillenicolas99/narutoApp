import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className="flex justify-between p-4 bg-gray-800 text-white">
                <ul>
                    <li><strong>Naruto App</strong></li>
                </ul>
                <ul className="flex gap-4">
                    <li><NavLink to={'/'}>Inicio</NavLink></li>
                    <li><NavLink to={'/clans'}>Clans</NavLink></li>
                    <li><NavLink to={'/about'}>Acerca de</NavLink></li>
                    <li><NavLink to={'contact'}>Contato</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}