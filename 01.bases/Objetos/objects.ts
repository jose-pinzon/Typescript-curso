(()=>{


    // !Aqui le estamos colocando los tipos que tendran los datos del objeto
    let flash:{ name:string, age:number, power:string[], getNombre?: () => string  } = {
        name:'barry',
        age:24,
        power:['Super velocidad','Viajar en el tiempo']
    }

    // flash = {
    //     name:'superman',
    //     age:60,
    //     power:['super Fuerza'],
    //     getNombre(){
    //         return this.name
    //     }                    
    // }

    // console.log(flash.getNombre());


})()