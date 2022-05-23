(()=>{

    type Hero = {
        name:string,
        age?:number,
        power: number[],
        getName?: () => string
    }

    let MyCustomvariable:( string | number | Hero)  = 'Fernando'
    console.log(typeof MyCustomvariable);

    MyCustomvariable = {
        name: 'Bruce',
        age:43,
        power:[2]
    }

    console.log(typeof MyCustomvariable);


})()