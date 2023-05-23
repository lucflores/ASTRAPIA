import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header data-bs-theme="dark">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/">
                    <img className="imglogo" src="../../../public/logo.png" alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to={`/categoria/2`}>apartado A</NavLink>
                                {/* <p className="nav-link active" aria-current="page">Home</p> */}
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={`/categoria/3`}>apartado B</NavLink>
                                {/* <p className="nav-link" href="#">Link</p> */}
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link disabled" to={`/categoria2`}>otra categoria</NavLink>
                                <p className="nav-link disabled">Disabled</p> 
                            </li> */}
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </header>
    )
}

export default NavBar