(()=>{

    // !Con type se generan los tipos, para no ponerlo todo en el objeto
    type Hero = {
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