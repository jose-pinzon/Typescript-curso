(() => {

    const  fullName = ( firtName:string,...Resto:string[] ):string => {
        return `${ firtName } ${ Resto.join(' ') }`
    } 

    const superman = fullName('Clark','Joseph','Kent')

    console.log(superman);

})()