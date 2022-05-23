// import { Hero as SuperHero } from "./classes/Hero";
// import  powers from "./data/powers";
// const iroman = new SuperHero('stark', 1,42 );
// console.log( iroman.power );
// console.log( powers );


// !------------------------------------------------------------
import { printObject, printFuntion, printFuntionArrow } from '../generics/generics';
import { Hero, Villain } from '../interfaces';

// printObject(123)
// printObject('hola')
// printObject({ a:1,b:2 })
// printObject( new Date() )


// console.log( printFuntion( '123' ) );
// console.log( printFuntion( 123 ).toFixed(2) );

// !------------------------------------------------------------

const deadpool = {
    name:'Dead pool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}


//La interface Hero sera la que tomara la T de los genericos
console.log(printFuntionArrow<Hero>(deadpool));
