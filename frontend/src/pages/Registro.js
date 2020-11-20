
import React, { Component } from 'react';
import Logo from '../img/LOGO.jpg';
import '../styles/Registro.css';
import { Link } from 'react-router-dom';

class Registro extends Component {
    render (){
        return(
            <div>
               <main className="ma">
                   <img className="Avatarr" src={Logo} alt=""/>
                   <div className="contenedor">
                       <div className="formulario">
                           <h2>Registro</h2>
                        {/*ruta de acuerdo al backend*/}
                           <form action="localhost:4000/Registro">
                               
                               <input type="text" placeholder="Nombre"/>
                               <input type="text" placeholder="Apellido"/>
                               <input type="text" placeholder="Correo"/>
                               <input type="text" placeholder="Contraseña"/>
                                <Link to="/cuestionario">
                                <input type="submit" placeholder="Ingresar"/>
                                </Link>
                              
                           </form>
                       </div>
                   </div>
               </main>

            </div>
        );
    }

}
export default Registro;