
import React, { Component } from 'react';
import Logo from '../img/LOGO.jpg';
import '../styles/Registro.css';
import axios from 'axios'
import { Link } from 'react-router-dom';
    
class Registro extends Component {

    constructor(props) {
		super(props)

		this.state = {
			correo: '',
            contraseña: '',
            apellido: '',
			nombre: ''
        }
    }

    changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
    }
    
    submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:3000/api/registro/usuario/nuevo', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}
        
    render (){
        const { correo, contraseña, apellido, nombre } = this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}></form>
               <main className="ma">
                   <img className="Avatarr" src={Logo} alt=""/>
                   <div className="contenedor">
                       <div className="formulario">
                           <h2>Registro</h2>

                           <form onSubmit={this.submitHandler}>
					<div>
						<input
                            type="text"	name="correo" value={correo}
                            placeholder="Correo"
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
                            type="text" name="contraseña" value={contraseña}
                            placeholder="Contraseña"
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
                            type="text" name="apellido" value={apellido}
                            placeholder="Apellido"
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
						<input
                            type="text" name="nombre" value={nombre}
                            placeholder="Nombre"
							onChange={this.changeHandler}
						/>
					</div>
                    <button type="submit" placeholder="Ingresar"></button>
				</form>

                

                        {/*ruta de acuerdo al backend*/}
                           {/* <form action="localhost:3000/api/registro/usuario/nuevo">
                               
                               <input type="text" value="nombre" placeholder="Nombre"/>
                               <input type="text" value="apellido" placeholder="Apñññellido"/>
                               <input type="text" value="correo" placeholder="Correo"/>
                               <input type="text" value="contraseña" placeholder="Contraseña"/>
                                <Link to="/cuestionario">
                                <input type="submit" placeholder="Ingresar"/>
                                </Link>
                              
                           </form> */}
                       </div>
                   </div>
               </main>

            </div>
        );
    }

}
export default Registro;