import React, { useState, useEffect } from 'react';
import Header from './header.jsx';
import Tablero from './Tablero.jsx'
import ConstruirBaraja from '../utilis/ConstruirBaraja';



function App({ winer }) {
  const [baraja, setBaraja] = useState(ConstruirBaraja());
  const [parejaSeleccionada, setParejaSeleccionada] = useState([]);
  const [estaComparando, setEstaComparando] = useState(false);
  const [parejaSelect, setParejaSelect] = useState([]);
  const [intentos, setIntentos] = useState(0)

  const seleccionarCarta = (carta) => {
    
    if(estaComparando || parejaSeleccionada.indexOf(carta) > -1 || baraja.fueAdivinada){
      return;
    }
    parejaSelect.push(carta);
    setParejaSeleccionada([...parejaSeleccionada, carta]);

    if(parejaSelect.length === 2){
      compararPareja()
    }
    function compararPareja(){
         setEstaComparando(true);
         var newBaraja;
         setTimeout(() => {
            const [primeraCarta, segundaCarta] = parejaSelect;
          if(primeraCarta.icono === segundaCarta.icono){
            
              newBaraja = baraja.map((carta) => {
                if(carta.icono !== primeraCarta.icono){
                  return carta 
                }
                
                return {...carta, fueAdivinada:true}
              });

              console.log(newBaraja)
             setBaraja(newBaraja)

             let intento = 1;
             intento += intentos
              if(
                newBaraja.filter(carta => carta.fueAdivinada === false).length === 0
              ){
                winer(intento)
              }

              

            }
            
            
            setParejaSeleccionada([]);
            setParejaSelect([]);
            setEstaComparando(false);
            setIntentos(intentos + 1);
          }, 1000)
          
      }
  }
  
  const reset = () => {
  setBaraja(ConstruirBaraja());
  setParejaSeleccionada([]);
  setEstaComparando(false);
  setParejaSelect([]);
  setIntentos(0);
  }

  return (
    <div className="flex flex-column flex-wrap h-100 bg-red-700 font-mono">
      <Header 
        intentos={intentos}
        reset={reset}
        />
      <Tablero 
        baraja={baraja}
        parejaSeleccionada={parejaSeleccionada}
        seleccionarCarta={(carta) => {seleccionarCarta(carta)}}
      />
    </div>
  );
}

export default App;
