import React, {useState} from 'react'
import  ReactCardFlip  from  'react-card-flip' ;

export default function Carta({icono, seleccionarCarta, estaSiendoComparada, fueAdivinada}){
    

    return (
        <div onClick={seleccionarCarta} className="box-border border-2 w-1/6" style={{height:"135px"}}>
            <ReactCardFlip 
                isFlipped = { estaSiendoComparada || fueAdivinada }
                >
                <div className=" bg-yellow-600" style={{height:"130px"}}>
                   
                </div>
                <div className="bg-yellow-600 flex justify-center " style={{height:"130px"}}>
                    <i className={`fa self-center ${icono} fa-5x`}></i>
                </div>
            </ReactCardFlip>
        </div>
        
    )
}
