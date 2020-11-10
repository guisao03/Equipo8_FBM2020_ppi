import React from 'react';
import Principal from './pages/Principal';
import Nosotros from './pages/Nosotros';
import Iniciarsesion from './pages/Iniciarsesion';
import Registro from './pages/Registro';
import Usuario from '../src/pages/Usuario'; 
import Calendario from '../src/pages/Calendario';
import Entrenamiento from '../src/pages/Entrenamiento';
import Retroalimentacion from '../src/pages/Retroalimentacion';
import Cuestionario from '../src/pages/Cuestionario';
import Entrenamiento_dos from '../src/pages/Entrenamiento_dos';
import Entrenamiento_tres from '../src/pages/Entrenamiento_tres';
import Abdomen_prin from './circutos/Abdomen_prin';
import Bracircuito3_prin from './circutos/Bracircuito3_prin';
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
          <Route path="/calendario" component={Calendario}>
              <Calendario/>
          </Route>
          <Route path="/entrenamiento" component={Entrenamiento}>
              <Entrenamiento/>
          </Route>
          <Route path="/entrenamiento_dos" component={Entrenamiento_dos}>
              <Entrenamiento_dos/>
          </Route>
          <Route path="/entrenamiento_tres" component={Entrenamiento_tres}>
              <Entrenamiento_tres/>
          </Route>
          <Route path="/retroalimentacion" component={Retroalimentacion}>
              <Retroalimentacion/>
          </Route>
          <Route path="/cuestionario" component={Cuestionario}>
              <Cuestionario/>
          </Route>
          <Route path="/abdomen_prin" component={Abdomen_prin}>
              <Abdomen_prin/>
              </Route>
          <Route path="/bracircuito3_prin" component={Bracircuito3_prin}>
              <Bracircuito3_prin/>
        
          </Route>

         


        </Switch>
        </BrowserRouter>
  
   
    
  );
}

export default App;
