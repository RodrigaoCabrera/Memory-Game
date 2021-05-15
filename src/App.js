import React, { Fragment, useState } from 'react'
import Inicio from './components/Inicio.jsx';
import Ranking from './components/Ranking.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


function App() {
 const [msg, setMsg] = useState('');
  const [intentos, setIntentos] = useState('');

 const winer = (intento) => {
   setIntentos(intento)
   setMsg(`Haz ganado despues de ${intento} intentos`);
 }


  return (
    <Router>
      <div className="flex flex-col w-full">
          
        {
          msg.length ? 
          <div class="bg-white rounded  mx-auto md:w-2/3 w-full border shadow-lg">
            <div class="rounded-t bg-teal-500">
              <div class="relative py-3 px-2 flex">
                <span class="font-semibold text-dark md:text-base text-sm">¡Felicidades!</span>
                <div class="absolute right-0 top-0 -mr-2 -mt-2 border cursor-pointer shadow-lg bg-white z-10 p-1 rounded-full p-2">
                  <a onClick={()=>{setMsg('')}}><img src="https://image.flaticon.com/icons/svg/151/151882.svg" className="w-2 h-2" /></a>
                </div>
              </div>
            </div>
            <div class="bg-gray-200 md:text-base text-sm border-b p-2 h-24">
                <p>{msg}</p>
              </div>
              <div class="p-2 flex justify-end rounded-b">
                
                <button class="focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 bg-red-700 hover:bg-red-600 text-white rounded" onClick={()=>{setMsg('')}}>Cancelar</button>
              </div>
          </div>
            : 
            null
        }

        <Switch>

          <Route exact path="/">
             <Inicio winer={winer}/>
          </Route>
          <Route path="/ranking">
             <Ranking intentos={intentos}/>
          </Route>

        </Switch>
        
      </div>

    </Router>
  );
}

export default App;
