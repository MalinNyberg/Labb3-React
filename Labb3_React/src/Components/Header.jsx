import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <>
            <header className="grid-header">
                <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white box-shadow mb-3 main-font">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="http://localhost:5239">Momoko</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa-solid fa-bars nav-menu-color"></i>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item">
                                    <NavLink className="nav-link text-dark" to="/book-table">Book a table</NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="http://localhost:5239/Menu/Menu">Menu</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="http://localhost:5239/Story/Story">Our Story</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}