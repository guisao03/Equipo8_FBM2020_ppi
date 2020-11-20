import React from 'react';
import '../styles/Header.css';
import Logo from '../img/LOGO.jpg';
import { Link } from 'react-router-dom';


function Header(props) {
    return (
        <header>
            <nav>
                <img src={Logo}   alt="" loading="lazy" />
                <div className="collapse navbar-collapse" id="navbars-rs-food">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a class="nav-link"><Link to="/">Inicio</Link></a></li>
                        <li className="nav-item"><a class="nav-link" ><Link to="/nosotros">Sobre nosotros</Link></a></li>
                    </ul>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food">
                    <i class="fa fa-bars"></i>
                </button>
                <ul>
                    <Link to="/sesion" className="ingre"><button className=" ingresar">Ingresar</button></Link>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/nosotros">Sobre nosotros</Link></li>
                </ul>
            </nav>
            <section className="Texto-header">
                <h1>Olympo Fitness</h1>
                <h2>Cuida y ama tu cuerpo en tiempos de pandemia</h2> 
             
            </section>
            <div className="Wave" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" ><path d="M-14.39,80.42 C149.99,150.00 263.82,-13.31 499.15,56.73 L509.31,186.02 L-13.82,169.23 Z" ></path></svg></div>
            
        </header> 
    );
}
export default Header;
