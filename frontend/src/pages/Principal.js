import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hombre1 from '../img/hombre1.jpeg';
import Hombre2 from '../img/hombre2.jpeg';
import Imagengrande from '../img/imagengrande.jpeg';
import '../styles/Principal.css';



function Principal(props){
    return(
        <div>
            <Header/>
            
            <main>
            
<h2 className="titulo ">Guía tu Cuerpo</h2>
<section className="sepcion-uno">
    <div className="contenedor-dos">
        <img src={Hombre1} alt=""/>
        <h3 className="titulo-cuatro">Alimentate Bien</h3>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio inventore nulla nobis doloremque nesciunt amet aliquam rem exercitationem iste sit?
        </p>
    </div>
    <div className="contenedor-tres">
        <img src={Hombre2} alt=""/>
        <h3 className="titulo-cuatro">Desde tu Propia Casa</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, repellendus. Cupiditate atque sed iusto nisi consectetur, eos magnam itaque aperiam.
        </p>
    </div>
</section>

<section className="sepcion-dos">
    <div className="imagen">
        <img src={Imagengrande} alt=""/>
    </div>

    <div className="texto">
        <h2 className="tilulo-dos">Algo Importante</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus accusamus dolorum ea, ad adipisci excepturi sapiente sed libero at, eos exercitationem sequi vitae porro pariatur.</p>
    </div>

</section>

<section className="sepcion-tres">
    <div className="columna-uno">
        <h3 className="titulo-tres">Explora tu Cuerpo</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi provident numquam atque veniam deserunt laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, placeat.</p>
    </div>
    <div className="columna-dos">
        <h3 className="titulo-tres">Beneficios</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, rerum ducimus. Itaque ex quod voluptatum repudiandae maiores nihil quibusdam et!</p>
    </div>
    <div className="columna-tres">
        <h3 className="titulo-tres">Dificultades</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, fugiat.</p>
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
</section>
</main>
<Footer/>

        </div>
    );
}
export default Principal;