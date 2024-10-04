/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const LandingPage = () => {
    return (
        <div className="landing-page">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">VeggieMart</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <header className="header">
                <div className="container text-center">
                    <h1 className="display-4">Welcome to VeggieMart</h1>
                    <p className="lead">Your one-stop shop for fresh, local produce</p>
                    <a href="#" className="btn btn-primary btn-lg">Shop Now</a>
                </div>
            </header>

            <section className="features py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="feature-box">
                                <i className="fas fa-seedling fa-3x mb-3"></i>
                                <h3>Fresh Produce</h3>
                                <p>We offer the freshest produce directly from local farms.</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="feature-box">
                                <i className="fas fa-truck fa-3x mb-3"></i>
                                <h3>Fast Delivery</h3>
                                <p>Get your orders delivered to your doorstep quickly and efficiently.</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="feature-box">
                                <i className="fas fa-leaf fa-3x mb-3"></i>
                                <h3>Eco-Friendly</h3>
                                <p>Our packaging is eco-friendly and sustainable.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer bg-dark text-white py-4">
                <div className="container text-center">
                    <p>&copy; 202 VeggieMart. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;