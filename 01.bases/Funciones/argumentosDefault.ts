(()=>{
    const fullName = ( firstName:string, lastName?:string, upper:boolean = false  ): string => {
        
        if ( upper ) {
            return ` ${ firstName } ${ lastName || 'apellido' }`.toUpperCase();
        } else {
            return ` ${ firstName } ${ lastName || 'apellido' }`;
        }
    }

    const name = fullName( 'Tony', 'stark' , true);
    console.log({ name })
})()