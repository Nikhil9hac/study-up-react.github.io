import React from 'react'

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" data-aos="fade-right" data-aos-duration="900">
                <div className="container-fluid">
                    <img src="https://gdurl.com/ef_Z" alt="Logo" srcset="" />
                    <a className="navbar-brand" href="#">
                        Study<span>high</span>
                    </a>
                    <button className="navbar-toggler" type="button" ata-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
                            className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                            <li className="nav-item"><a className="nav-a" aria-current="page" href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-a" aria-current="" href="/material">Material</a></li>
                            <li className="nav-item"><a className="nav-a" href="/request-course">Request-Course</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <h1>nikhil</h1>
        </>
    )
}
export default Nav;
