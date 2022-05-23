(() => {//?esto es para evitar que nuestra variables choquen por si lo declaramos igual

    const batman:string = 'Batman'
    const linternaVerde:string = "Linterna Verde"
    const volcanNegro:string = `Heroe:Volcan negro`


    console.log(`I'm ${ batman }`)
    
    console.log(batman[10]?.toUpperCase() ||'No hay ese catacter' );

})()