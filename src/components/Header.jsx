import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="flex justify-between items-center py-6 px-[5%] bg-black">
            <h1 className="logo p-2 text-[2rem] font-bold text-amber-50 cursor-pointer transition-all"
            > <span className="text-blue-500 p-1">Loja de Brinquedo</span></h1>
            <nav>
                <ul className="flex list-none items-center gap-8">
                    <li>
                        <Link to="/Home" className="text-white text-lg no-underline hover:text-[#95ff00] hover:uppercase transition-all">Home</Link>
                    </li>
                    <li>
                        <Link to="/Brinquedos" className="text-white text-lg no-underline hover:text-[#0044ff] hover:uppercase transition-all">Brinquedos</Link>
                    </li>
                    <li>
                        <Link to="/Contato" className="text-white text-lg no-underline hover:text-[#0044ff] hover:uppercase transition-all">Contato</Link>
                    </li>
                    <li>
                        <Link to="/Login" className="text-white text-lg no-underline hover:text-[#0044ff] hover:uppercase transition-all">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header