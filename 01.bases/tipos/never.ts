(()=>{

    // !Never significa que la funcion no puede terminar exitosamente
    const error = ( msg:string ):never => {
        throw new Error(msg)
    }


    error('Es un error')

})()    