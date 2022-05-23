(()=>{


    //! Una clase abstracta es una clase que puede servir como cascaron para otras clases que extiendan de el
    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){

        }
    }

    class Xmen extends Mutante {
        salvarMundo(){
            return 'Mundo salvado'
        }
    }
    class Villans extends Mutante {
        conquistarMundo(){
            return ' Mundo conquistado'
        }
    }

    const wolverine = new Xmen('wolverine','logan');
    const magneto = new Villans('magneto','magnus');

// ?Las clases abstactas tambien sirven para poder verificar que una clase tenga las caracteristicas de su clase abstacta

    const PrintName = ( character:Mutante )  =>{
        // console.log(character.name);
    } 
    
    PrintName(wolverine);



    // console.log(wolverine );
    // console.log(magneto);



})()