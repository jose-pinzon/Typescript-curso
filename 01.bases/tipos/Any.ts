(()=>{

    // !Hace que no resibamos ayuda a la hora de usar metodos
    //!Lo que hace que sea algo complicado recordarlos
    let avenger:any = 123;
    
    avenger  ='DR strange';
    // !Casteando para que los reconosca como un string
    console.log((avenger as string).charAt(3))

    avenger = 1341
    console.log(<number>avenger.toFixed(1))//?Segunda forma de castear



})()