import React from 'react'

export default function Header({intentos, reset}) {


    return (
        
            <header className="flex justify-between  pb-2 bg-gray-400 w-full text-lg text-justify align-middle">
                <div className="pt-2 ml-2">Memory game</div>
                <div className="pt-2">
                    <button onClick={reset} className="bg-gray-600 hover:bg-gray-500 text-white font-bold  py-2 px-4 rounded-full">Reiniciar</button>
                </div>
                <div className="pt-2 mr-2">Intentos: {intentos}</div>
            </header>
        
    )
}
