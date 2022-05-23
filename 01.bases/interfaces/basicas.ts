(()=>{

    //!Un type es lo mismo que una interfaz con la unica diferencia que la interfaces se pueden extender
    interface Hero  {
        name:string,
        age?:number,
        power: string[],
        getName?: () => string
    }

    let flash: Hero = {
        name:'barry',
        age:24,
        power:['Super velocidad','Viajar en el tiempo'],
        getName() {
            return this.name
        }
    }



})()