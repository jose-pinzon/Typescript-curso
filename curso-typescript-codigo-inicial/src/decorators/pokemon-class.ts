
// !Los decoradores son funciones que se ejectaran al momendo de ejecuar o transpilar nuestro proyecto
function printToCosole( constructor:Function ){
    console.log(constructor);
}

const printFuntionConsoleCondicional = ( print: boolean = false ):Function => {
    if( print ){
        return printToCosole
    }
    else{
        return () => {}
    }
}

const bloquearPrototipo = function ( constructor: Function ) {
    Object.seal( constructor )
    Object.seal( constructor.prototype )
}


function CheckValidPokemonId(){

    // !PropertyDescriptor solo sirve si se esta decorando un metodo
    return function( target: any, properKey:string, descriptor:PropertyDescriptor ){
        const originalMethod = descriptor.value;
        // descriptor.value = () => console.log('hola');
        // el parametro es el mismo que tendra la funcion
        descriptor.value = ( id:number ) => {
            if( id < 1 || id > 800 ){
                return console.error('El id no existee');
            }else{
                return originalMethod(id)
            }
        }

    }
}



function readonly ( isWritable: boolean = true ):Function {
    return function(target:any, propertyKey: string) {
        const descriptor: PropertyDescriptor = {
            get(){
                console.log( this );
                return 'jose'
            },
            set( this, val ){
                console.log(this, val );
                Object.defineProperty( this,  propertyKey, {
                    value:val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }
        return descriptor;
    }
}



@bloquearPrototipo
@printFuntionConsoleCondicional( false )
export class Pokemon_class{

    @readonly()
    public ApiPublic: string = 'https://pokeapi.co'


    constructor(
        public name:string
    ){
       
    }

    @CheckValidPokemonId()
    savePokemon(  id: number ){
        console.log(`Pokemon guardado correctamente ${ id }`);
    }

}