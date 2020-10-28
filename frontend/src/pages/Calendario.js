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
                <section className="barraa">
                    <div className="barrita">
                    <img src={Logo} />
                    <h1>Calendario</h1>
                    </div>
                <div className="calendarioo">
            <Calendar onChange={onChange} value={date} />
            {console.log(date)}
                </div>
                </section>
            
        </div>

       
    );
};

render(<Calendario />, document.querySelector("#root"));
export default Calendario; 