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
            
            <main className="main">
            
<h2 className="titulo ">Guía tu cuerpo</h2>
<section className="sepcion-uno">
    <div className="contenedor-dos">
        <img src={Hombre1} alt=""/>
        <h3 className="titulo-cuatro">Alimentate bien</h3>
        <p> Una alimentación saludable es importante para sentirse bien y prevenir enfermedades crónicas como diabetes, hipertensión, obesidad y algunos tipos de cáncer. Con adoptar pequeños cambios, se pueden obtener grandes resultados.</p>
    </div>
    <div className="contenedor-tres">
        <img src={Hombre2} alt=""/>
        <h3 className="titulo-cuatro">Desde tu propia casa</h3>
        <p>El ejercicio en casa es ideal si la persona es mayor o está lesionada. Son las dos razones con más peso para elegir esta opción. Las caminatas y los ejercicios aeróbicos mejoran la salud cardiovascular, la articular y son fundamentales para perder peso.</p>
    </div>
</section>

<section className="sepcion-dos">
    <div className="imagen">
        <img src={Imagengrande} alt=""/>
    </div>

    <div className="texto">
        <h2 className="tilulo-dos">Algo importante...</h2>
        <p>Existen estudios que demuestran que hacer ejercicio físico puede mejorar la memoria en los adultos. De hecho algunos arrojan datos tan curiosos como que correr y caminar mejoran la retención de vocabulario. Para las mujeres, el ejercicio físico ayuda a aliviar los síntomas del síndrome pre menstrual.</p>
    </div>

</section>

<section className="sepcion-tres">
    <div className="columna-unoo">
        <h3 className="titulo-tres">Explora tu cuerpo...</h3>
        <p> Date el lujo de conocerte, analiza tu cuerpo y dale lo que necesita, cuídate a ti mismo y en un futuro tal vez cercano, serás muy bien recompensado </p>
    </div>
    <div className="columna-dos">
        <h3 className="titulo-tres">Beneficios...</h3>
        <p> La actividad física regular puede mejorar la fuerza muscular y aumentar la resistencia. El ejercicio suministra oxígeno y nutrientes a los tejidos y ayuda a que el sistema cardiovascular funcione de manera más eficiente. Y cuando tu salud cardíaca y pulmonar mejora, tienes más energía para hacer las tareas diarias</p>
    </div>
    <div className="columna-tres">
        <h3 className="titulo-tres">Dificultades...</h3>
        <p>Los huesos pueden sufrir las consecuencias, así como los músculos y las articulaciones, volviéndose más débiles. Otra consecuencia de la falta de ejercicio puede ser el envejecimiento prematuro. Nuestro cuerpo pierde fibras musculares, el metabolismo se vuelve más lento y empeora el riego sanguíneo.</p>
    </div>
</section>
</main>
<Footer/>

        </div>
    );
}
export default Principal;