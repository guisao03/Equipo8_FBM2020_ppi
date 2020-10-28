import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Guis from '../img/elguis.jpg';
import Icon from '../img/icono1.png';
import Valle from '../img/Elvalle.jpg';
import Brayan from '../img/Elbrayan.jpg';
import Timo from '../img/eltimo.jpg';
import Uno from '../img/Launo.jpg'

import '../styles/Nosotros.css';



function Nosotros (props){
    return (
        <div>
             <Header/>
             <section className="sepcion-uno">
                 <div className="colum-uno">
                     <h2 className="til">Conoce un Poco de Nosotros</h2>
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem voluptas quas ratione itaque. Sunt itaque, reprehenderit adipisci minima quasi, quaerat quo id, molestiae voluptas dolorum architecto tempora officia facere nihil.</p>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quisquam, officiis reprehenderit maiores ipsam incidunt!</p>
                 </div>
                 <div className="colum-dos">
                     <img src ={Uno} alt="" />
                    
                 </div>
             </section>
             
             <section className="seccion-dos">
                 <div className="contenedorr">
                     <div className="galeria-equi">
                         <div className="imgen-equi">
                         <img src={Guis} alt=""/>
                         <div className="hover-galeria">
                             <img src={Icon} alt=""/>
                             <p>Geison Guisao</p>
                             <p>Programador</p>
                             <p>Investigador</p>
                         </div>
                        </div> 
                     </div>
                    </div>
                    <div className="contenedorr">
                     <div className="imgen-equi">
                         <img src={Valle} alt=""/>
                         <div className="hover-galeria">
                             <img src={Icon} alt=""/>
                             <p>Dairon Andres Quiroga</p>
                             <p>No se sabe</p>
                         </div>
                     </div>
                     </div>
                     <div className="contenedorr">
                     <div className="imgen-equi">
                         <img src={Brayan} alt=""/>
                         <div className="hover-galeria">
                             <img src={Icon} alt=""/>
                             <p>Brayan Isaza</p>
                             <p>Documentador</p>
                             <p>Programador</p>
                         </div>
                     </div>
                     </div>
                     <div className="contenedorr">
                     <div className="imgen-equi">
                         <img src={Timo} alt=""/>
                         <div className="hover-galeria">
                             <img src={Icon} alt=""/>
                             <p>Timoteo Vallejo Coronado</p>
                             <p>Lider</p>
                             <p>Diseñador</p>
                             <p>Programador</p>
                         </div>
                     </div>
                     </div>
             </section>
            <Footer/>
        </div>
        

    );
}
export default Nosotros;