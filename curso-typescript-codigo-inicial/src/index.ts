import { Pokemon_class } from './decorators/pokemon-class';



const charmander = new Pokemon_class('Charmander');

// (Pokemon_class.prototype as any).customName = 'Pikachu'

charmander.ApiPublic = 'jose/com'

console.log(charmander); 