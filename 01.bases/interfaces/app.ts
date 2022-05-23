// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface auto {
    encender:boolean;
    velocidadMaxima:number,
    acelerar (): void
}


// interface auto2{
//   ( auto:auto ) : void
// }


const conducirBatimovil = ( auto:auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil:auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales


interface guason {
    reir?:boolean ,
    comer?:boolean ,
    llorar?:boolean ,
}


const guason:guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:guason ):void => {

  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface cd {
    ( ciudadanos:string[]  ): number
}


const ciudadGotica:cd = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/


interface Personas {
  nombre:string;
  edad:number;
  sexo:string;
  estadoCivil:string;
  imprimirBio () :void;


}

class Persona implements Personas {

  public nombre:string;
  public edad:number;
  public sexo:string;
  public estadoCivil:string



  constructor (nombre:string,
    edad:number,
    sexo:string,
    estadoCivil:string
    
    ){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil

    }

  imprimirBio(){
    console.log('hola');

  }

}