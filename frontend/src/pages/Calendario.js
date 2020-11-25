import React, { useState } from 'react';
import { render } from 'react-dom';
import Calendar from 'react-calendar'; 
import Logo from '../img/LOGO.jpg'
import '../styles/Calendario.css'



const Calendario = () => {
    const [date, setDate] = useState(new Date());

    const  onChange = date => {
        setDate(date)
    }

    return (
        <div>
            <div className="cal">
            <div className="barrita">
                    <img src={Logo} />
                    <h1>Calendario</h1>
                    </div>
                <section className="barraa">
                    
                <div className="calendarioo">
            <Calendar onChange={onChange} value={date} />
            {console.log(date)}
                </div>
                <div className="botin">
                    <a className="botinn" href="/usuario"> Atras </a>
                </div>
                </section>
                
                </div>
                
        </div>

       
    );
};

render(<Calendario />, document.querySelector("#root"));
export default Calendario; 