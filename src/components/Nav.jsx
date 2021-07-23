import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" data-aos="fade-right" data-aos-duration="900">
                <div className="container-fluid">
                    <img src="https://gdurl.com/ef_Z" alt="Logo"  />
                    <NavLink to="/">Study<span>high</span></NavLink>
                    <button className="navbar-toggler" type="button" ata-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
                            className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                            <li className="nav-item"><NavLink to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink to="/material">Material</NavLink></li>
                            <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="http://google.com"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"#fff"}}>
                        Request
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><NavLink to="/request-course" className="dropdown-item text-center">Request-Course</NavLink></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><NavLink to="/deadlink" className="dropdown-item text-center">Report DeadLink</NavLink></li>
                        <li><hr className="dropdown-divider"/></li>
                    </ul>
                    </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Nav;
