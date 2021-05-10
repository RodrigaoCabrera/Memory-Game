import React from 'react'
import Carta from './Carta.jsx';


export default function Tablero({baraja, parejaSeleccionada, seleccionarCarta}) {

    return (
        <div className="w-screen flex flex-wrap justify-between" style={{height:"94%", width:"100vw"}}>
            {
                baraja.map((carta, i) => {
                    const estaSiendoComparada = parejaSeleccionada.indexOf(carta) > -1
                    return <Carta 
                        key={i}
                        icono={carta.icono}
                        estaSiendoComparada={estaSiendoComparada}
                        seleccionarCarta={() => seleccionarCarta(carta)}
                        fueAdivinada={carta.fueAdivinada}
                        />
                })
            }
        </div>
    )
}
