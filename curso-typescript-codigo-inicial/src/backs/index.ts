import { getPokemon } from '../generics/get-pokemon';

getPokemon(3)
    .then( pokemon => console.log(pokemon.sprites.front_default))
    .catch( error => console.error(error))
    .finally(()=> console.log('fin de get pokemon'))