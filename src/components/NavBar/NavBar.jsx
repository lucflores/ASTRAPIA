import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header data-bs-theme="dark">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/">
                    <img className="imglogo" src="../../public/logo.png" alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to={`/categoria/2`}>Productos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={`/categoria/3`}>Hot Sale🔥</NavLink>
                            </li>
                        </ul>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </header>
    )
}

export default NavBar