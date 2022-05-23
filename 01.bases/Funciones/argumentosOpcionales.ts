(()=>{
    const fullName = ( firstName:string, lastName?:string ):string => {
        return `${ firstName } ${ lastName || 'apellido' }`
    }

    const name = fullName( 'Tony' );
    console.log({ name })


})()