import shuffle from 'lodash.shuffle'
import FontAwesomeClasses from './fontAwesomeClasses'


const NUMEROS_CARTAS = 18;

export default () => {
    const fontAwesomeClasses = FontAwesomeClasses();
    let cartas = [];
    while(cartas.length < NUMEROS_CARTAS){
        const index = Math.floor(Math.random * fontAwesomeClasses.length);
        const carta = {
            icono: fontAwesomeClasses.splice(index, 1)[0],
            fueAdivinada:false
        }
        cartas.push(carta);
        cartas.push({...carta});
    };
    return shuffle(cartas);
}