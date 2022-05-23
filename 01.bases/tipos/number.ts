(()=>{
    let avengers:number = 10;
    console.log( avengers );

    const villians: number = 20 

    if(avengers < villians){
        console.log('problemas');
    }else{
        console.log('salvados');
    }

    avengers = Number('55a')//?lo deja pasar pero nos dara NaN que es considerado como numero

    console.log({avengers});
})()