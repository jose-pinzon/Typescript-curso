(()=>{
    const addNumber = (a:number, b:number) => a + b ;
    const greet = ( name:string ) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;

    let myFunction;
    // *let myFunction:Function; para que acepte solo funciones

    //* let myFunction:(y:number, z:number ) => number;asignando que tipos de funciones puede aceptar 




    myFunction = 10
    console.log(myFunction);

    myFunction = addNumber//?Asignacion de la funcion
    console.log(myFunction(2,5));


    myFunction = greet
    console.log(myFunction('jose'));

    myFunction = saveTheWorld
    console.log(myFunction());



})()