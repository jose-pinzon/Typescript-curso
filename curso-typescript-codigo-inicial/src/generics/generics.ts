


export const printObject = ( argument: any ) => {
    console.log( argument );
}


// !Funcion de tipo generico que su tipo sera el mismo que se estara pasando por argumento
export function printFuntion <T>( argument: T ):T{
    return argument;
}
export const printFuntionArrow = <T>( argument: T ) =>  argument;



