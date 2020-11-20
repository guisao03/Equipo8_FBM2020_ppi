import React from 'react';
import Principal from './pages/Principal';
import Nosotros from './pages/Nosotros';
import Iniciarsesion from './pages/Iniciarsesion';
import Registro from './pages/Registro';
import Usuario from '../src/pages/Usuario'; 
import Usuario2 from '../src/pages/Usuario2';
import Usuario3 from '../src/pages/Usuario3';
import Calendario from '../src/pages/Calendario';
import Entrenamiento from '../src/pages/Entrenamiento';
import Retroalimentacion from '../src/pages/Retroalimentacion';
import Cuestionario from '../src/pages/Cuestionario';
import Entrenamientodos from './pages/Entrenamientodos';
import Entrenamientotres from './pages/Entrenamientotres';
import Abdomen from './circutoflaco/Abdomen';
import Brazos from './circutoflaco/Brazos';
import Pecho from '../src/circutoflaco/Pecho';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';






function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route  excat path="/" exact component={Principal}>
            <Principal/>
          </Route>
          <Route path="/nosotros" component={Nosotros}>
            <Nosotros/> 
          </Route>
          <Route path="/sesion" component={Iniciarsesion} />
            
          <Route path="/registro" component={Registro}/>
            
          <Route path="/usuario" component={Usuario}>
              <Usuario/>
          </Route>
          <Route path="/usuario_2" component={Usuario2}>
              <Usuario2/>
          </Route>
          <Route path="/usuario_3" component={Usuario3}>
              <Usuario3/>
          </Route>
          <Route path="/calendario" component={Calendario}>
              <Calendario/>
          </Route>
          <Route path="/entrenamiento" component={Entrenamiento}>
              <Entrenamiento/>
          </Route>
          <Route path="/entrenamiento_dos" component={Entrenamientodos}>
              <Entrenamientodos/>
          </Route>
          <Route path="/entrenamiento_tres" component={Entrenamientotres}>
              <Entrenamientotres/>
          </Route>
          <Route path="/retroalimentacion" component={Retroalimentacion}>
              <Retroalimentacion/>
          </Route>
          <Route path="/cuestionario" component={Cuestionario}>
              <Cuestionario/>
          </Route>
          <Route path="/abdomen" component={Abdomen}>
              <Abdomen/>
              </Route>
          <Route path="/brazos" component={Brazos}>
              <Brazos/>
          </Route>
          <Route path="/pecho" component={Pecho}>
              <Pecho/>
          </Route>
        </Switch>
        </BrowserRouter>
  
   
    
  );
}

export default App;
